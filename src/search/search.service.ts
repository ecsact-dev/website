import {Injectable} from '@angular/core';
import Fuse from 'fuse.js';

interface DoxygenBase {
	name: string;
	refid: string;
	kind: string;
}

interface DoxygenMember extends DoxygenBase {}

interface DoxygenCompound extends DoxygenBase {
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
	constructor() {
		this.refresh();
	}

	refresh() {
		this.loadDoxygenXml('/assets/_devref/ecsact/index.xml');
	}

	private loadDoxygenXml(path: string) {
		const xhr = new XMLHttpRequest();

		xhr.onload = () => {
			const compounds = Array.from(
				xhr.responseXML.documentElement.children,
			).map(parseDoxygenCompound);

			console.log(compounds);
		};

		xhr.onerror = err => {
			console.error(err);
		};

		xhr.open('GET', path);
		xhr.responseType = 'document';
		xhr.send();
	}
}
