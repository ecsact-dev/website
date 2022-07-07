import {Injectable} from '@angular/core';
import Fuse from 'fuse.js';
import {BehaviorSubject, Observable} from 'rxjs';

import {
	DoxygenBase,
	DoxygenBaseDef,
	DoxygenClassDef,
	DoxygenCompound,
	DoxygenCompoundDef,
	DoxygenCompoundDefInclude,
	DoxygenDefineMemberDef,
	DoxygenDefLocation,
	DoxygenDirDef,
	DoxygenEnumMemberDef,
	DoxygenFileDef,
	DoxygenFunctionMemberDef,
	DoxygenFunctionParameter,
	DoxygenFunctionReturn,
	DoxygenMember,
	DoxygenMemberDef,
	DoxygenMemberWithOwner,
	DoxygenParagraph,
	DoxygenRefText,
	DoxygenStructDef,
	DoxygenText,
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

function getTypeElCommonInfo(
	el: Element,
	info: {type: string; typeRefid?: string},
) {
	const typeEl = el.querySelector('type');
	let typeRefEl: Element | null = null;

	if (typeEl) {
		info.type = typeEl.textContent.trim();
		typeRefEl = typeEl.querySelector('ref');
	} else {
		typeRefEl = el.querySelector('ref');
	}

	if (typeRefEl) {
		info.typeRefid = typeRefEl.getAttribute('refid');
	}
}

function getDoxygenText(node: Node): DoxygenText {
	if (node.nodeType === document.TEXT_NODE) {
		return node.textContent;
	} else if (node.nodeName === 'ref') {
		const el = node as Element;
		const refText: DoxygenRefText = {
			kindref: el.getAttribute('kindref'),
			refid: el.getAttribute('refid'),
			text: el.textContent,
		};

		return refText;
	}

	console.warn(`Unknown doxygen text node: ${node.nodeName}`);
	return '';
}

function getDoxygenParagraph(para: Element): DoxygenParagraph {
	const doxygenParagraph: DoxygenParagraph = [];
	for (const childNode of Array.from(para.childNodes)) {
		if (childNode.nodeType === document.TEXT_NODE) {
			doxygenParagraph.push(childNode.textContent);
		} else if (childNode.nodeName === 'computeroutput') {
			if (childNode.childNodes.length > 1) {
				console.error('Unexpected extra child nodes (length > 1)');
			}
			doxygenParagraph.push({
				markupType: 'computeroutput',
				content: getDoxygenText(childNode.firstChild),
			});
		} else if (childNode.nodeName === 'itemizedlist') {
			doxygenParagraph.push({
				markupType: 'itemizedlist',
				items: Array.from(
					(childNode as Element).querySelectorAll('listitem'),
				).map(itemEl => getDoxygenParagraph(itemEl.firstElementChild)),
			});
		} else if (
			childNode.nodeName === 'parameterlist' ||
			childNode.nodeName === 'simplesect'
		) {
			// Ignore special details
		} else {
			console.warn(
				`Unhandled detailed description node '${childNode.nodeName}'. Treating as text.`,
			);
		}
	}

	return doxygenParagraph;
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
		const parameters: DoxygenFunctionParameter[] = [];
		const paramByName: {[paramName: string]: DoxygenFunctionParameter} = {};
		for (const paramEl of Array.from(el.querySelectorAll('param'))) {
			const param: DoxygenFunctionParameter = {
				type: '',
				name: '',
				description: '',
			};

			getTypeElCommonInfo(paramEl, param);

			const declnameEl = paramEl.querySelector('declname');
			if (declnameEl) {
				param.name = declnameEl.textContent.trim();
			}

			parameters.push(param);
			if (param.name) {
				paramByName[param.name] = param;
			}
		}

		const returnDetails: DoxygenFunctionReturn = {
			description: '',
			type: '',
		};

		// Return type exists as <type> in the root of the <memberdef>
		getTypeElCommonInfo(el, returnDetails);

		const detailedDescription: DoxygenParagraph[] = [];

		const detailedDescEl = el.querySelector('detaileddescription');
		if (detailedDescEl) {
			for (const para of Array.from(detailedDescEl.children)) {
				const doxygenParagraph = getDoxygenParagraph(para);

				if (doxygenParagraph.length > 0) {
					detailedDescription.push(doxygenParagraph);
				}
			}

			const returnDetailEl = detailedDescEl.querySelector(
				'simplesect[kind=return]',
			);
			if (returnDetailEl) {
				returnDetails.description = returnDetailEl.textContent;
			}

			const paramListEl = detailedDescEl.querySelector(
				'parameterlist[kind=param]',
			);
			if (paramListEl) {
				for (const paramItemEl of Array.from(paramListEl.children)) {
					const paramItemNameEl =
						paramItemEl.querySelector('parameternamelist');
					const paramItemDescriptionEl = paramItemEl.querySelector(
						'parameterdescription',
					);

					if (paramItemNameEl) {
						const paramName = paramItemNameEl.textContent.trim();
						const param = paramByName[paramName];
						if (param && paramItemDescriptionEl) {
							param.description = paramItemDescriptionEl.textContent.trim();
						}
					}
				}
			}
		}

		const location: DoxygenDefLocation = {
			file: '',
			column: 0,
			line: 0,
		};

		const locationEl = el.querySelector('location');
		if (locationEl) {
			location.file = locationEl.getAttribute('file');
			location.line = parseInt(locationEl.getAttribute('line'));
			location.column = parseInt(locationEl.getAttribute('column'));
		}

		return {
			...def,
			kind: 'function',
			name: el.querySelector('name').textContent,
			definition: el.querySelector('definition').textContent.trim(),
			argsstring: el.querySelector('argsstring').textContent.trim(),
			access: el.getAttribute('prot') as any,
			const: el.getAttribute('const') === 'yes',
			explicit: el.getAttribute('explicit') === 'yes',
			inline: el.getAttribute('inline') === 'yes',
			static: el.getAttribute('static') === 'yes',
			brief: el.querySelector('briefdescription').textContent.trim(),
			parameters,
			return: returnDetails,
			location,
			detailedDescription,
		};
	},
};

const doxygenCompoundDefParseFns = {
	file: (def: DoxygenBaseDef, el: Element): DoxygenFileDef => {
		console.log('TODO file def', el);

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
			...def,
			kind: 'file',
			language: el.getAttribute('language'),
			name: el.querySelector('compoundname').textContent,
			defines: sections['define'],
			enums: sections['enum'],
			typedefs: sections['typedef'],
			functions: sections['function'],
		};
	},
	class: (def: DoxygenBaseDef, el: Element): DoxygenClassDef => {
		console.log('TODO class def', el);
		return {
			...def,
			kind: 'class',
		};
	},
	struct: (def: DoxygenBaseDef, el: Element): DoxygenStructDef => {
		console.log('TODO struct def', el);
		return {
			...def,
			kind: 'struct',
		};
	},
	dir: (def: DoxygenBaseDef, el: Element): DoxygenDirDef => {
		console.log('TODO dir def', el);
		return {
			...def,
			kind: 'dir',
		};
	},
};

function parseDoxygenCompoundDef(el: Element): DoxygenCompoundDef {
	const def: DoxygenBaseDef = {
		id: el.getAttribute('id'),
		kind: el.getAttribute('kind'),
	};

	const defParseFn = doxygenCompoundDefParseFns[def.kind];
	if (defParseFn) {
		return defParseFn(def, el);
	}

	throw new Error(`Unhandled compound def kind ${def.kind}`);
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
