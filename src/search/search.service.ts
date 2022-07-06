import {Injectable} from '@angular/core';
import Fuse from 'fuse.js';

export interface DoxygenBase {
	name: string;
	refid: string;
	kind: string;
}

export interface DoxygenMember extends DoxygenBase {}

export interface DoxygenCompound extends DoxygenBase {
	members: DoxygenMember[];
}

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

@Injectable({providedIn: 'root'})
export class Search {
	private _compounds: DoxygenCompound[] = [];
	private _flattendedIndex: (DoxygenCompound | DoxygenMember)[];

	constructor() {
		this.refresh();
	}

	findCompound(text: string): DoxygenBase[] {
		const fuse = new Fuse(this._flattendedIndex, {
			keys: ['name'],
		});

		return fuse.search(text).map(item => item.item);
	}

	refresh() {
		this.loadDoxygenXml('/assets/_devref/ecsact/index.xml');
	}

	private loadDoxygenXml(path: string) {
		const xhr = new XMLHttpRequest();

		xhr.onload = () => {
			this._compounds = Array.from(
				xhr.responseXML.documentElement.children,
			).map(parseDoxygenCompound);

			this._flattendedIndex = this._compounds.reduce((items, compound) => {
				items.push(compound);
				if (compound.kind !== 'namespace') {
					items.push(...compound.members);
				}
				return items;
			}, [] as (DoxygenCompound | DoxygenMember)[]);
		};

		xhr.onerror = err => {
			console.error(err);
		};

		xhr.open('GET', path);
		xhr.responseType = 'document';
		xhr.send();
	}
}
