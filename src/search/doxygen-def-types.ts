export interface DoxygenBase {
	name: string;
	refid: string;
	kind: string;
}

export interface DoxygenMember extends DoxygenBase {}

export interface DoxygenMemberWithOwner extends DoxygenMember {
	owner: DoxygenCompound;
}

export interface DoxygenCompound extends DoxygenBase {
	members: DoxygenMember[];
}

export interface DoxygenBaseDef {
	id: string;
	kind: string;
}

export interface DoxygenCompoundDefInclude {
	local: boolean;
	path: string;
}

export interface DoxygenClassDef extends DoxygenBaseDef {
	kind: 'class';
}

export interface DoxygenStructDef extends DoxygenBaseDef {
	kind: 'struct';
}

export interface DoxygenDirDef extends DoxygenBaseDef {
	kind: 'dir';
}

export interface DoxygenFileDef extends DoxygenBaseDef {
	kind: 'file';
	language: string;
	name: string;
	defines: DoxygenDefineMemberDef[];
	enums: DoxygenEnumMemberDef[];
	typedefs: DoxygenTypedefMemberDef[];
	functions: DoxygenFunctionMemberDef[];
}

export type DoxygenCompoundDef =
	| DoxygenFileDef
	| DoxygenClassDef
	| DoxygenStructDef
	| DoxygenDirDef;

export type DoxygenMemberDef =
	| DoxygenDefineMemberDef
	| DoxygenEnumMemberDef
	| DoxygenTypedefMemberDef
	| DoxygenFunctionMemberDef;

export interface DoxygenDefineMemberDef extends DoxygenBaseDef {
	kind: 'define';
}

export interface DoxygenEnumMemberDef extends DoxygenBaseDef {
	kind: 'enum';
}

export interface DoxygenTypedefMemberDef extends DoxygenBaseDef {
	kind: 'typedef';
}

export interface DoxygenFunctionParameter {
	type: string;
	typeRefid?: string;
	name: string;
	description: string;
}

export interface DoxygenFunctionReturn {
	type: string;
	typeRefid?: string;
	description: string;
}

export interface DoxygenDefLocation {
	file: string;
	line: number;
	column: number;
}

export type DoxygenPlainText = string;

export interface DoxygenRefText {
	refid: string;
	kindref: string;
	external?: string;
	text: string;
}

export type DoxygenText = DoxygenPlainText | DoxygenRefText;

export type DoxygenMarkup =
	| DoxygenComputerOutputMarkup
	| DoxygenItemizedListMarkup;

export interface DoxygenComputerOutputMarkup {
	markupType: 'computeroutput';
	content: DoxygenText;
}

export interface DoxygenItemizedListMarkup {
	markupType: 'itemizedlist';
	items: DoxygenParagraph[];
}

export type DoxygenParagraph = (DoxygenText | DoxygenMarkup)[];

export interface DoxygenFunctionMemberDef extends DoxygenBaseDef {
	kind: 'function';
	name: string;
	definition: string;
	argsstring: string;
	static: boolean;
	const: boolean;
	explicit: boolean;
	inline: boolean;
	access: 'public' | 'protected' | 'private';
	brief: string;
	detailedDescription: DoxygenParagraph[];
	parameters: DoxygenFunctionParameter[];
	return: DoxygenFunctionReturn;
	location: DoxygenDefLocation;
}
