// TODO: enable ts in this file again
// @ts-nocheck

import { Injectable } from '@angular/core';
import Fuse from 'fuse.js';
import { BehaviorSubject, Observable } from 'rxjs';

import {
	DoxygenBase,
	DoxygenCompound,
	DoxygenCompoundDef,
	DoxygenPageDef,
	DoxygenMember,
	DoxygenMemberDef,
	DoxygenMemberWithOwner,
} from './doxygen-def-types';
import { parseDoxygenCompoundDef, parseDoxygenMemberDef } from './doxygen-parse';
import { PageInfo } from './page-info-types';
import { searchablePageInfos } from './searchable-page-infos';

function parseDoxygenBase(el: Element): DoxygenBase {
	const name = el.querySelector('name')?.textContent || '';
	return {
		name,
		refid: el.getAttribute('refid')!,
		kind: el.getAttribute('kind')!,
		internal: name.indexOf('detail') !== -1,
	};
}

function parseDoxygenMember(el: Element): DoxygenMember {
	return {
		...parseDoxygenBase(el),
	};
}

function parseDoxygenCompound(el: Element): DoxygenCompound {
	return {
		...parseDoxygenBase(el),
		members: Array.from(el.querySelectorAll('member'))
			.map(parseDoxygenMember)
			.filter(mem => mem.name.indexOf('__') === -1),
	};
}

export function isMemberWithOwner(
	value: DoxygenCompound | DoxygenMemberWithOwner,
): value is DoxygenMemberWithOwner {
	return !!(value as Partial<DoxygenMemberWithOwner>).owner;
}

export interface SearchResultReferenceItem {
	type: 'reference';
	repo: string;
	item: DoxygenCompound | DoxygenMemberWithOwner;
}

export interface SearchResultPageItem {
	type: 'page';
	path: string;
	fragment: string;
	item: PageInfo;
}

export interface IRepoInfo {
	name: string;
	commit: string;
	sha256: string;
	url: string;
	stripPrefix: string;
}

export type SearchResultItem = SearchResultReferenceItem | SearchResultPageItem;

const mainKeyMap = {
	page: 'title',
	reference: 'name',
};

function getPathWithFragment(path: string): { path: string; fragment: string } {
	const fragmentStartIndex = path.indexOf('#');
	if (fragmentStartIndex !== -1) {
		return {
			path: path.substring(0, fragmentStartIndex),
			fragment: path.substring(fragmentStartIndex + 1),
		};
	}

	return { path, fragment: '' };
}

@Injectable({ providedIn: 'root' })
export class Search {
	private _refreshPromise?: Promise<void>;
	private _readySubj = new BehaviorSubject<boolean>(false);
	private _searchItems: SearchResultItem[];
	private _compounds: { [repo: string]: DoxygenCompound[] } = {};
	private _repoInfos: { [repo: string]: Promise<IRepoInfo> | IRepoInfo } = {};
	private _fuseInstance: Fuse<SearchResultItem>;
	private _refidMap: { [refid: string]: number } = {};

	public ready$: Observable<boolean> = this._readySubj.asObservable();

	public readonly repos = [
		'ecsact_runtime',
		'ecsact_parse',
		'ecsact_interpret',
		'ecsact_rtb',
		'ecsact_rt_entt',
		'ecsact_si_wasm',
		'ecsact_sdk',
		'ecsact_lang_cpp',
		'ecsact_lang_csharp',
		'ecsact_lang_json',
		'ecsact_unity',
	];

	constructor() {
		this._fuseInstance = new Fuse(this._searchItems, {
			shouldSort: true,
			keys: [
				{
					name: 'main',
					getFn: item => item.item[mainKeyMap[item.type]],
					weight: 10,
				},
				{
					name: 'item.description',
					weight: 5,
				},
				{
					name: 'item.keywords',
					weight: 12,
				},
				{
					name: 'item.kind',
					weight: 3,
				},
				{
					name: 'item.owner.name',
					weight: 2,
				},
				{
					name: 'type',
					weight: 1,
				},
			],
		});
	}

	search(text: string): SearchResultItem[] {
		return this._fuseInstance.search(text, { limit: 20 }).map(item => item.item);
	}

	private async _getCompoundDef(repo: string, refid: string) {
		const compountDefDoc = await new Promise<Document>((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = () => resolve(xhr.responseXML);
			xhr.onerror = err => reject(err);
			xhr.open('GET', `/assets/_devref/${repo}/${refid}.xml`);
			xhr.responseType = 'document';
			xhr.send();
		});

		const compoundDef =
			compountDefDoc.documentElement.querySelector('compounddef');
		if (!compoundDef) {
			throw new Error(`No compound def with refid ${refid}`);
		}
		return compoundDef;
	}

	async getCompounds(repo: string): Promise<DoxygenCompound[]> {
		await this._refreshPromise;
		return this._compounds[repo] || [];
	}

	async getRepoInfo(repo: string): Promise<IRepoInfo> {
		if (!this._repoInfos[repo]) {
			const path = `/assets/_devref/${repo}/repo.json`;
			this._repoInfos[repo] = fetch(path)
				.then(res => res.json())
				.then(info => (this._repoInfos[repo] = info as IRepoInfo));
		}

		return this._repoInfos[repo];
	}

	getDef(
		repo: string,
		refid: string,
	): Promise<DoxygenCompoundDef | DoxygenMemberDef>;
	getDef(repo: string, refid: 'indexpage'): Promise<DoxygenPageDef>;

	async getDef(
		repo: string,
		refid: string,
	): Promise<DoxygenCompoundDef | DoxygenMemberDef> {
		await this.fetchIfNeeded();

		const index = this._refidMap[refid];
		if (typeof index !== 'number') {
			throw new Error(`Unknown refid ${refid}`);
		}

		const item = this._searchItems[index];
		if (item.type !== 'reference') {
			throw new Error(`Unknown refid ${refid}. Found ${item.type} instead.`);
		}

		if (isMemberWithOwner(item.item)) {
			const ownerDef = await this._getCompoundDef(repo, item.item.owner.refid);
			const memberDef = ownerDef.querySelector(`memberdef#${item.item.refid}`);
			if (!memberDef) {
				throw new Error(`No member def with refid ${item.item.refid}`);
			}
			return parseDoxygenMemberDef(memberDef);
		} else {
			const el = await this._getCompoundDef(repo, item.item.refid);
			return parseDoxygenCompoundDef(el);
		}
	}

	allPageSearchItems(): SearchResultItem[] {
		return [
			...Object.keys(searchablePageInfos).map(path => ({
				...getPathWithFragment(path),
				type: 'page' as 'page',
				item: searchablePageInfos[path]!,
			})),
		];
	}

	/**
	 * Search items that should show up when there is no search input
	 */
	defaultSearchItems(): SearchResultItem[] {
		return this.allPageSearchItems();
	}

	async fetchIfNeeded() {
		if (!this._readySubj.getValue() && !this._refreshPromise) {
			await this.refresh();
		}
	}

	async refresh() {
		this._readySubj.next(false);

		this._refidMap = {};
		this._searchItems = this.allPageSearchItems();

		this._refreshPromise = Promise.all(
			this.repos.map(repo => this.loadDoxygenXml(repo)),
		).then(() => {
			delete this._refreshPromise;
		});

		try {
			await this._refreshPromise;
		} finally {
			this._fuseInstance.setCollection(this._searchItems);
			this._readySubj.next(true);
		}
	}

	private async loadDoxygenXml(repo: string) {
		const path = `/assets/_devref/${repo}/index.xml`;

		const doc = await new Promise<Document>((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = () => resolve(xhr.responseXML);
			xhr.onerror = err => reject(err);
			xhr.open('GET', path);
			xhr.responseType = 'document';
			xhr.send();
		});

		const compounds = Array.from(doc.documentElement.children)
			.map(parseDoxygenCompound)
			.filter(compound => compound.name.indexOf('__') === -1);

		this._compounds[repo] = compounds;

		const referenceSearchItems = compounds.reduce((items, compound) => {
			items.push({ type: 'reference', repo, item: compound });
			items.push(
				...compound.members.map(mem => ({
					type: 'reference' as 'reference',
					repo,
					item: { ...mem, owner: compound },
				})),
			);
			return items;
		}, [] as SearchResultReferenceItem[]);

		const offset = this._searchItems.length;

		this._searchItems.push(...referenceSearchItems);

		referenceSearchItems.forEach((item, index) => {
			this._refidMap[item.item.refid] = index + offset;
		});
	}
}
