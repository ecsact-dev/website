import {Injectable} from '@angular/core';
import Fuse from 'fuse.js';
import {BehaviorSubject, Observable} from 'rxjs';

import {
	DoxygenBase,
	DoxygenBaseDef,
	DoxygenDataTypeDef,
	DoxygenCompound,
	DoxygenCompoundDef,
	DoxygenCompoundDefInclude,
	DoxygenDefineMemberDef,
	DoxygenDefLocation,
	DoxygenDirDef,
	DoxygenEnumMemberDef,
	DoxygenEnumParameter,
	DoxygenEnumReturn,
	DoxygenFileDef,
	DoxygenFunctionMemberDef,
	DoxygenFunctionParameter,
	DoxygenFunctionReturn,
	DoxygenMember,
	DoxygenMemberDef,
	DoxygenMemberWithOwner,
	DoxygenParagraph,
	DoxygenRefText,
	DoxygenText,
	DoxygenTypedefMemberDef,
	DoxygenTypeDefParameter,
	DoxygenTypeDefReturn,
	DoxygenVariableMemberDef,
	DoxygenVariableReturn,
	DoxygenNamespaceDef,
	DoxygenInnerClassDef,
	DoxygenDefineParameter,
	DoxygenInnerNamespaceDef,
	DoxygenEnumValueMemberDef,
	DoxygenInnerFileDef,
	DoxygenInnerDirDef,
} from './doxygen-def-types';
import {PageInfo} from './page-info-types';
import {searchablePageInfos} from './searchable-page-infos';

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

export function isMemberWithOwner(
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
		console.log('define', el);
		const defineParams: DoxygenDefineParameter[] = [];

		for (const paramEl of Array.from(el.querySelectorAll('param'))) {
			const param: DoxygenDefineParameter = {
				name: el.querySelector('defname').textContent.trim(),
			};

			defineParams.push(param);
		}

		const detailedDescription = getDetailedDescription(el);

		const location = getLocation(el);

		return {
			...def,
			kind: 'define',
			name: el.querySelector('name').textContent.trim(),
			access: el.querySelector('prot') as any,
			static: el.getAttribute('static') === 'yes',
			parameters: defineParams,
			brief: el.querySelector('briefdescription').textContent.trim(),
			detailedDescription: detailedDescription,
			location,
		};
	},
	enum: (def: DoxygenBaseDef, el: Element): DoxygenEnumMemberDef => {
		console.log('TODO enum', el);
		const enumValueParameters: DoxygenEnumParameter[] = [];
		for (const paramEl of Array.from(el.querySelectorAll('enumvalue'))) {
			const detailedDescription = getDetailedDescription(paramEl);

			let param: DoxygenEnumParameter = {
				name: paramEl.querySelector('name').textContent.trim(),
				initializer: paramEl.querySelector('initializer').textContent.trim(),
				access: paramEl.querySelector('prot') as any,
				brief: paramEl.querySelector('briefdescription').textContent.trim(),
				detailedDescription: detailedDescription,
			};
			enumValueParameters.push(param);
		}

		const detailedDescription = getDetailedDescription(el);
		const location = getLocation(el);

		const enumReturn: DoxygenEnumReturn = {};

		return {
			...def,
			kind: 'enum',
			name: el.querySelector('name').textContent.trim(),
			static: el.getAttribute('static') === 'yes',
			access: el.getAttribute('prot') as any,
			parameters: enumValueParameters,
			brief: el.querySelector('briefdescription').textContent.trim(),
			detailedDescription: detailedDescription,
			return: enumReturn,
			location,
		};
	},
	typedef: (def: DoxygenBaseDef, el: Element): DoxygenTypedefMemberDef => {
		const templateParameters: DoxygenTypeDefParameter[] = [];
		for (const paramEl of Array.from(el.querySelectorAll('param'))) {
			const param: DoxygenTypeDefParameter = {
				type: '',
			};
			const typeEl = paramEl.querySelector('type');

			param.type = typeEl.textContent.trim();

			templateParameters.push(param);
		}

		const detailedDescription = getDetailedDescription(el);
		const location = getLocation(el);

		const returnDetails: DoxygenTypeDefReturn = {};

		return {
			...def,
			kind: 'typedef',
			name: el.querySelector('name').textContent,
			definition: el.querySelector('definition').textContent.trim(),
			static: el.getAttribute('static') === 'yes',
			access: el.getAttribute('prot') as any,
			brief: el.querySelector('briefdescription').textContent.trim(),
			detailedDescription,
			location,
		};
	},
	function: (def: DoxygenBaseDef, el: Element): DoxygenFunctionMemberDef => {
		const parameters: DoxygenFunctionParameter[] = [];
		const paramByName: {[paramName: string]: DoxygenFunctionParameter} = {};
		for (const paramEl of Array.from(el.querySelectorAll('param'))) {
			const param: DoxygenFunctionParameter = {
				type: '',
				name: '',
				brief: '',
				detailedDescription: [],
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
							param.detailedDescription = getDetailedDescription(
								paramItemDescriptionEl,
							);
							param.brief = paramItemDescriptionEl.textContent.trim();
						}
					}
				}
			}
		}

		const location = getLocation(el);

		return {
			...def,
			kind: 'function',
			name: el.querySelector('name').textContent,
			definition: el.querySelector('definition').textContent.trim(),
			argsstring: el.querySelector('argsstring').textContent.trim(),
			access: el.getAttribute('prot') as any,
			virtual: el.getAttribute('virt') as any,
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
	variable: (def: DoxygenBaseDef, el: Element): DoxygenVariableMemberDef => {
		const location = getLocation(el);
		const detailedDescription = getDetailedDescription(el);

		const returnDetails: DoxygenVariableReturn = {};

		return {
			...def,
			kind: 'variable',
			name: el.querySelector('name').textContent,
			definition: el.querySelector('definition').textContent.trim(),
			argsstring: el.querySelector('argsstring').textContent.trim(),
			static: el.getAttribute('static') === 'yes',
			access: el.getAttribute('prot') as any,
			mutable: el.getAttribute('mutable') === 'yes',
			brief: el.querySelector('briefdescription').textContent.trim(),
			detailedDescription,
			return: returnDetails,
			location,
		};
	},
	enumValue: (def: DoxygenBaseDef, el: Element): DoxygenEnumValueMemberDef => {
		console.log('enumValue: ', el);
		return {
			...def,
			kind: 'enum-value',
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
			enumValue: [] as DoxygenEnumValueMemberDef[],
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

		var innerClassType = el.querySelectorAll('innerclass');
		let innerClassList: DoxygenInnerClassDef[] = [];

		if (innerClassType) {
			for (const innerClassDef of Array.from(innerClassType)) {
				innerClassList.push(doxygenInnerClass(innerClassDef));
			}
		}

		var innerNamespaceType = el.querySelectorAll('innernamespace');
		let innerNamespaceList: DoxygenInnerNamespaceDef[] = [];
		if (innerNamespaceType) {
			for (const innerNamespaceDef of Array.from(innerNamespaceType)) {
				innerNamespaceList.push(doxygenInnerNamespace(innerNamespaceDef));
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
			enumValues: sections['enum-value'],
			innerClasses: innerClassList,
			innerNamespaces: innerNamespaceList,
		};
	},
	class: (def: DoxygenBaseDef, el: Element): DoxygenDataTypeDef => {
		console.log('class', el);
		return doxygenConstructDataType(def, el, 'class');
	},
	struct: (def: DoxygenBaseDef, el: Element): DoxygenDataTypeDef => {
		console.log('struct', el);
		return doxygenConstructDataType(def, el, 'struct');
	},
	dir: (def: DoxygenBaseDef, el: Element): DoxygenDirDef => {
		const innerFiles = el.querySelectorAll('innerfile');
		let innerFilesList: DoxygenInnerFileDef[] = [];
		if (innerFiles) {
			for (const innerFileEl of Array.from(innerFiles)) {
				let innerFile: DoxygenInnerFileDef = {
					id: innerFileEl.getAttribute('refid'),
					name: innerFileEl.textContent.trim(),
				};
				innerFilesList.push(innerFile);
			}
		}

		const innerDirs = el.querySelectorAll('innerdir');
		let innerDirsList: DoxygenInnerFileDef[] = [];

		if (innerDirs) {
			for (const innerDirsEl of Array.from(innerDirs)) {
				let innerDir: DoxygenInnerDirDef = {
					id: innerDirsEl.getAttribute('refid'),
					name: innerDirsEl.textContent.trim(),
				};
				innerDirsList.push(innerDir);
			}
		}

		const detailedDescription = getDetailedDescription(el);

		return {
			...def,
			kind: 'dir',
			name: el.querySelector('compoundname').textContent.trim(),
			innerFiles: innerFilesList,
			innerDirs: innerDirsList,
			brief: el.querySelector('briefdescription').textContent.trim(),
			detailedDescription: detailedDescription,
			location: getLocation(el),
		};
	},
	namespace: (def: DoxygenBaseDef, el: Element): DoxygenNamespaceDef => {
		console.log('namespace', el);
		var varType = el.querySelector('sectiondef[kind=var]');
		let varTypeList: DoxygenVariableMemberDef[] = [];

		if (varType) {
			for (const varMemDef of Array.from(varType.children)) {
				let kind = varMemDef.getAttribute('kind');
				let func = doxygenMemberDefParseFns[kind];

				const def: DoxygenBaseDef = {
					id: varMemDef.getAttribute('id'),
					kind: kind,
				};

				varTypeList.push(func(def, varMemDef));
			}
		}

		var innerClassType = el.querySelectorAll('innerclass');
		let innerClassList: DoxygenInnerClassDef[] = [];

		if (innerClassType) {
			for (const innerClassDef of Array.from(innerClassType)) {
				innerClassList.push(doxygenInnerClass(innerClassDef));
			}
		}

		var innerNamespaceType = el.querySelectorAll('innernamespace');
		let innerNamespaceList: DoxygenInnerNamespaceDef[] = [];
		if (innerNamespaceType) {
			for (const innerNamespaceDef of Array.from(innerNamespaceType)) {
				innerNamespaceList.push(doxygenInnerNamespace(innerNamespaceDef));
			}
		}

		return {
			...def,
			kind: 'namespace',
			name: el.querySelector('compoundname').textContent.trim(),
			variables: varTypeList,
			innerClasses: innerClassList,
			innerNamespaces: innerNamespaceList,
			brief: el.querySelector('briefdescription').textContent.trim(),
			access: 'namespace',
			detailedDescription: getDetailedDescription(el),
			location: getLocation(el),
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

export type SearchResultItem = SearchResultReferenceItem | SearchResultPageItem;

const mainKeyMap = {
	page: 'title',
	reference: 'name',
};

function getPathWithFragment(path: string): {path: string; fragment: string} {
	const fragmentStartIndex = path.indexOf('#');
	if (fragmentStartIndex !== -1) {
		return {
			path: path.substring(0, fragmentStartIndex),
			fragment: path.substring(fragmentStartIndex + 1),
		};
	}

	return {path, fragment: ''};
}

@Injectable({providedIn: 'root'})
export class Search {
	private _refreshPromise?: Promise<void>;
	private _readySubj = new BehaviorSubject<boolean>(false);
	private _searchItems: SearchResultItem[];
	private _fuseInstance: Fuse<SearchResultItem>;
	private _refidMap: {[refid: string]: number} = {};

	public ready$: Observable<boolean> = this._readySubj.asObservable();

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
		this.refresh();
	}

	search(text: string): SearchResultItem[] {
		return (
			this._fuseInstance
				.search(text)
				// .slice(0, 20)
				.map(item => item.item)
		);
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
		//Add another branch for enum value
		await this._refreshPromise;

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
			return parseDoxygenMemberDef(
				ownerDef.querySelector(`memberdef#${item.item.refid}`),
			);
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

	async refresh() {
		this._readySubj.next(false);

		this._refidMap = {};
		this._searchItems = this.allPageSearchItems();

		this._refreshPromise = Promise.all([this.loadDoxygenXml('ecsact')]).then(
			() => {
				delete this._refreshPromise;
			},
		);

		try {
			await this._refreshPromise;
		} finally {
			this._fuseInstance.setCollection(this._searchItems);
			this._readySubj.next(true);
		}
	}

	private async loadDoxygenXml(repo: string) {
		// TODO(zaucy): Use different path for production
		const path = `/assets/_devref/${repo}/index.xml`;

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

		const referenceSearchItems = compounds.reduce((items, compound) => {
			items.push({type: 'reference', repo, item: compound});
			// TODO: Add enum value edge case issue #25
			if (compound.kind !== 'namespace') {
				items.push(
					...compound.members.map(mem => ({
						type: 'reference' as 'reference',
						repo,
						item: {...mem, owner: compound},
					})),
				);
			}
			return items;
		}, [] as SearchResultReferenceItem[]);

		const offset = this._searchItems.length;

		this._searchItems.push(...referenceSearchItems);

		referenceSearchItems.forEach((item, index) => {
			this._refidMap[item.item.refid] = index + offset;
		});
	}
}

function doxygenConstructDataType(
	def: DoxygenBaseDef,
	el: Element,
	kind: string,
): DoxygenDataTypeDef {
	var publicType = el.querySelector('sectiondef[kind=public-type]');
	let publicTypeList: DoxygenTypedefMemberDef[] = [];

	if (publicType) {
		for (const publicTypeDefMem of Array.from(publicType.children)) {
			let kind = publicTypeDefMem.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: publicTypeDefMem.getAttribute('id'),
				kind: kind,
			};

			publicTypeList.push(func(def, publicTypeDefMem));
		}
	}

	var privateType = el.querySelector('sectiondef[kind=private-type');
	let privateTypeList: DoxygenTypedefMemberDef[] = [];

	if (privateType) {
		for (const privateTypeDefMem of Array.from(privateType.children)) {
			let kind = privateTypeDefMem.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: privateTypeDefMem.getAttribute('id'),
				kind: kind,
			};

			privateTypeList.push(func(def, privateTypeDefMem));
		}
	}

	var publicAttrib = el.querySelector('sectiondef[kind=public-attrib]');
	let publicVariableList: DoxygenVariableMemberDef[] = [];

	if (publicAttrib) {
		for (const publicVariableMemDef of Array.from(publicAttrib.children)) {
			let kind = publicVariableMemDef.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: publicVariableMemDef.getAttribute('id'),
				kind: kind,
			};

			publicVariableList.push(func(def, publicVariableMemDef));
		}
	}
	``;
	var privateAttrib = el.querySelector('sectiondef[kind=private-attrib]');
	let privateVariableList: DoxygenVariableMemberDef[] = [];

	if (privateAttrib) {
		for (const privateVariableMemDef of Array.from(privateAttrib.children)) {
			let kind = privateVariableMemDef.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: privateVariableMemDef.getAttribute('id'),
				kind: kind,
			};

			privateVariableList.push(func(def, privateVariableMemDef));
		}
	}

	var publicFunc = el.querySelector('sectiondef[kind=public-func]');
	let publicFunctionList: DoxygenFunctionMemberDef[] = [];

	if (publicFunc) {
		for (const publicFuncMemDef of Array.from(publicFunc.children)) {
			let kind = publicFuncMemDef.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: publicFuncMemDef.getAttribute('id'),
				kind: kind,
			};

			publicFunctionList.push(func(def, publicFuncMemDef));
		}
	}

	var privateFunc = el.querySelector('sectiondef[kind=private-func]');
	let privateFunctionList: DoxygenFunctionMemberDef[] = [];

	if (privateFunc) {
		for (const privateFuncMemDef of Array.from(privateFunc.children)) {
			let kind = privateFuncMemDef.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: privateFuncMemDef.getAttribute('id'),
				kind: kind,
			};

			privateFunctionList.push(func(def, privateFuncMemDef));
		}
	}

	var pubStaticFunc = el.querySelector('sectiondef[kind=public-static-func]');
	let pubStaticFunctionList: DoxygenFunctionMemberDef[] = [];

	if (pubStaticFunc) {
		for (const pubStaticFuncMemDef of Array.from(pubStaticFunc.children)) {
			let kind = pubStaticFuncMemDef.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: pubStaticFuncMemDef.getAttribute('id'),
				kind: kind,
			};

			pubStaticFunctionList.push(func(def, pubStaticFuncMemDef));
		}
	}

	var enums = el.querySelector('sectiondef[kind=enum');
	let enumList: DoxygenEnumMemberDef[] = [];

	if (enums) {
		for (const enumMemDef of Array.from(enums.children)) {
			let kind = enumMemDef.getAttribute('kind');
			let func = doxygenMemberDefParseFns[kind];

			const def: DoxygenBaseDef = {
				id: enumMemDef.getAttribute('id'),
				kind: kind,
			};

			enumList.push(func(def, enumMemDef));
		}
	}

	const detailedDescription = getDetailedDescription(el);

	return {
		...def,
		kind: 'datatype',
		access: el.getAttribute('prot') as any,
		brief: el.querySelector('briefdescription').textContent.trim(),
		detailedDescription: detailedDescription,
		name: el.querySelector('compoundname').textContent,
		publicTypes: publicTypeList,
		privateTypes: privateTypeList,
		privateVariables: privateVariableList,
		publicVariables: publicVariableList,
		publicFunctions: publicFunctionList,
		privateFunctions: privateFunctionList,
		publicStaticFunctions: pubStaticFunctionList,
		enums: enumList,
		location: getLocation(el),
	};
}

function doxygenInnerClass(el: Element): DoxygenInnerClassDef {
	return {
		id: el.getAttribute('refid'),
		name: el.textContent.trim(),
		access: el.getAttribute('prot') as any,
	};
}

function doxygenInnerNamespace(el: Element): DoxygenInnerNamespaceDef {
	return {
		id: el.getAttribute('refid'),
		name: el.textContent.trim(),
	};
}

function getDetailedDescription(el: Element): DoxygenParagraph[] {
	const detailedDescription: DoxygenParagraph[] = [];
	const detailedDescEl = el.querySelector('detaileddescription');

	if (detailedDescEl) {
		for (const para of Array.from(detailedDescEl.children)) {
			const doxygenParagraph = getDoxygenParagraph(para);

			if (doxygenParagraph.length > 0) {
				detailedDescription.push(doxygenParagraph);
			}
		}
	}

	return detailedDescription;
}

function getLocation(el: Element): DoxygenDefLocation {
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
	return location;
}
