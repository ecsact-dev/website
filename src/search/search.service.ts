import {Injectable} from '@angular/core';
import Fuse from 'fuse.js';
import {BehaviorSubject, Observable} from 'rxjs';

import {
	DoxygenBase,
	DoxygenBaseDef,
	DoxygenCompound,
	DoxygenCompoundDef,
	DoxygenCompoundDefInclude,
	DoxygenDefineMemberDef,
	DoxygenEnumMemberDef,
	DoxygenFileDef,
	DoxygenFunctionMemberDef,
	DoxygenMember,
	DoxygenMemberDef,
	DoxygenMemberWithOwner,
	DoxygenTypedefMemberDef,
} from './doxygen-def-types';

function parseDoxygenBase(el: Element): DoxygenBase {
	return {
		name: el.querySelector('name').textContent,
		refid: el.getAttribute('refid')!,
		kind: el.getAttribute('kind')!,
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
		members: Array.from(el.querySelectorAll('member')).map(parseDoxygenMember),
	};
}

function isMemberWithOwner(
	value: DoxygenCompound | DoxygenMemberWithOwner,
): value is DoxygenMemberWithOwner {
	return !!(value as Partial<DoxygenMemberWithOwner>).owner;
}

const doxygenMemberDefParseFns = {
	define: (def: DoxygenBaseDef, el: Element): DoxygenDefineMemberDef => {
		return {
			...def,
			kind: 'define',
		};
	},
	enum: (def: DoxygenBaseDef, el: Element): DoxygenEnumMemberDef => {
		return {
			...def,
			kind: 'enum',
		};
	},
	typedef: (def: DoxygenBaseDef, el: Element): DoxygenTypedefMemberDef => {
		return {
			...def,
			kind: 'typedef',
		};
	},
	function: (def: DoxygenBaseDef, el: Element): DoxygenFunctionMemberDef => {
		return {
			...def,
			kind: 'function',
			name: el.querySelector('name').textContent,
			access: el.getAttribute('prot') as any,
			const: el.getAttribute('const') === 'yes',
			explicit: el.getAttribute('explicit') === 'yes',
			inline: el.getAttribute('inline') === 'yes',
			static: el.getAttribute('static') === 'yes',
		};
	},
};

const doxygenCompoundDefParseFns = {
	// 'file': (def: DoxygenBaseDef, el: Element): DoxygenFileDef => {
	// },
};

function parseDoxygenCompoundDef(el: Element): DoxygenCompoundDef {
	console.log('parseDoxygenCompoundDef', el);

	const sections = {
		define: [] as DoxygenDefineMemberDef[],
		enum: [] as DoxygenEnumMemberDef[],
		typedef: [] as DoxygenTypedefMemberDef[],
		function: [] as DoxygenFunctionMemberDef[],
	};

	const sectionDefs = Array.from(el.querySelectorAll('sectiondef'));

	for (const sectionDef of sectionDefs) {
		let kind = sectionDef.getAttribute('kind');
		// Section def has a different 'kind' attribute _only_ for functions
		if (kind == 'func') kind = 'function';

		const memberDefs = Array.from(sectionDef.querySelectorAll('memberdef'));
		for (const memberDef of memberDefs) {
			const sectionMembers = sections[kind];
			if (!sectionMembers) {
				console.error(`Unhandled section kind: ${kind}`);
				continue;
			}

			const parseFn = doxygenMemberDefParseFns[kind];
			if (!parseFn) {
				console.error(`Unhandled member def parse kind ${kind}`);
				continue;
			}

			const def: DoxygenBaseDef = {
				id: memberDef.getAttribute('id'),
				kind: memberDef.getAttribute('kind'),
			};

			sections[kind].push(parseFn(def, memberDef));
		}
	}

	return {
		id: el.getAttribute('id'),
		// TODO(zaucy): support other compound types
		kind: el.getAttribute('kind') as 'file',
		language: el.getAttribute('language'),
		name: el.querySelector('compoundname').textContent,
		defines: sections['define'],
		enums: sections['enum'],
		typedefs: sections['typedef'],
		functions: sections['function'],
	};
}

function parseDoxygenMemberDef(el: Element): DoxygenMemberDef {
	const def: DoxygenBaseDef = {
		id: el.getAttribute('id'),
		kind: el.getAttribute('kind'),
	};

	const defParseFn = doxygenMemberDefParseFns[def.kind];
	if (defParseFn) {
		return defParseFn(def, el);
	}

	throw new Error(`Unhandled member def kind ${def.kind}`);
}

@Injectable({providedIn: 'root'})
export class Search {
	private _refreshPromise?: Promise<void>;
	private _readySubj = new BehaviorSubject<boolean>(false);
	private _flattendedIndex: (DoxygenCompound | DoxygenMemberWithOwner)[];
	private _refidMap: {[refid: string]: number} = {};

	public ready$: Observable<boolean> = this._readySubj.asObservable();

	constructor() {
		this.refresh();
	}

	findCompound(text: string): DoxygenBase[] {
		const fuse = new Fuse(this._flattendedIndex, {
			useExtendedSearch: true,
			ignoreLocation: true,
			minMatchCharLength: 3,
			keys: [
				{
					name: 'name',
					weight: 10,
				},
				{
					name: 'kind',
					weight: 1,
				},
			],
		});

		return fuse.search(text).map(item => item.item);
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

		return compountDefDoc.documentElement.querySelector('compounddef');
	}

	async getDef(
		repo: string,
		refid: string,
	): Promise<DoxygenCompoundDef | DoxygenMemberDef> {
		await this._refreshPromise;

		const index = this._refidMap[refid];
		if (typeof index !== 'number') {
			throw new Error(`Unknown refid ${refid}`);
		}

		const item = this._flattendedIndex[index];
		if (isMemberWithOwner(item)) {
			const ownerDef = await this._getCompoundDef(repo, item.owner.refid);
			return parseDoxygenMemberDef(
				ownerDef.querySelector(`memberdef#${item.refid}`),
			);
		} else {
			const el = await this._getCompoundDef(repo, item.refid);
			return parseDoxygenCompoundDef(el);
		}
	}

	async refresh() {
		this._readySubj.next(false);

		this._refreshPromise = Promise.all([
			this.loadDoxygenXml('/assets/_devref/ecsact/index.xml'),
		]).then(() => {
			delete this._refreshPromise;
		});

		try {
			await this._refreshPromise;
		} finally {
			this._readySubj.next(true);
		}
	}

	private async loadDoxygenXml(path: string) {
		const doc = await new Promise<Document>((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = () => resolve(xhr.responseXML);
			xhr.onerror = err => reject(err);
			xhr.open('GET', path);
			xhr.responseType = 'document';
			xhr.send();
		});

		const compounds = Array.from(doc.documentElement.children).map(
			parseDoxygenCompound,
		);

		this._flattendedIndex = compounds.reduce((items, compound) => {
			items.push(compound);
			if (compound.kind !== 'namespace') {
				items.push(...compound.members.map(mem => ({...mem, owner: compound})));
			}
			return items;
		}, [] as (DoxygenCompound | DoxygenMemberWithOwner)[]);

		this._refidMap = {};
		this._flattendedIndex.forEach((item, index) => {
			this._refidMap[item.refid] = index;
		});
	}
}
