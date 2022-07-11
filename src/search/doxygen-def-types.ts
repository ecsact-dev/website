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

export interface DoxygenDataTypeDef extends DoxygenBaseDef {
	kind: 'class' | 'struct';
	name: string;
	publicTypes: DoxygenTypedefMemberDef[];
	privateTypes: DoxygenTypedefMemberDef[];
	publicVariables: DoxygenVariableMemberDef[];
	privateVariables: DoxygenVariableMemberDef[];
	publicFunctions: DoxygenFunctionMemberDef[];
	publicStaticFunctions: DoxygenFunctionMemberDef[];
	enums: DoxygenEnumMemberDef[];
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
	enumValues: DoxygenEnumValueMemberDef[];
}

export type DoxygenCompoundDef =
	| DoxygenFileDef
	| DoxygenDataTypeDef
	| DoxygenNamespaceDef
	| DoxygenDirDef;

export type DoxygenMemberDef =
	| DoxygenDefineMemberDef
	| DoxygenEnumMemberDef
	| DoxygenTypedefMemberDef
	| DoxygenFunctionMemberDef
	| DoxygenVariableMemberDef
	| DoxygenEnumValueMemberDef;

export interface DoxygenDefineMemberDef extends DoxygenBaseDef {
	kind: 'define';
	access: 'public' | 'protected' | 'private';
	static: boolean;
	parameters: DoxygenDefineParameter[];
	brief: string;
	detailedDescription: DoxygenParagraph[];
	location: DoxygenDefLocation;
}

export interface DoxygenDefineParameter {
	name: string;
}

export interface DoxygenEnumMemberDef extends DoxygenBaseDef {
	kind: 'enum';
	name: string;
	static: boolean;
	access: 'public' | 'protected' | 'private';
	parameters: DoxygenEnumParameter[];
	brief: string;
	detailedDescription: DoxygenParagraph[];
	return: DoxygenEnumReturn;
	location: DoxygenDefLocation;
}

export interface DoxygenEnumParameter {
	access: 'public' | 'protected' | 'private';
	name: string;
	initializer: string;
	brief: string;
	detailedDescription: DoxygenParagraph[];
}

export interface DoxygenEnumReturn {}

export interface DoxygenNamespaceDef extends DoxygenBaseDef {
	kind: 'namespace';
	name: string;
	variables: DoxygenVariableMemberDef[];
	innerClasses: DoxygenInnerClassDef[];
	innerNamespaces: DoxygenInnerNamespaceDef[];
}

export interface DoxygenTypeDefParameter {
	type: string;
}

export interface DoxygenTypeDefReturn {}

export interface DoxygenTypedefMemberDef extends DoxygenBaseDef {
	kind: 'typedef';
	name: string;
	definition: string;
	static: boolean;
	access: 'public' | 'protected' | 'private';
	parameters: DoxygenTypeDefParameter[];
	brief: string;
	detailedDescription: DoxygenParagraph[];
	return: DoxygenTypeDefReturn;
	location: DoxygenDefLocation;
}

export interface DoxygenVariableParameter {}

export interface DoxygenVariableReturn {}

export interface DoxygenVariableMemberDef extends DoxygenBaseDef {
	kind: 'variable';
	name: string;
	definition: string;
	argsstring: string;
	static: boolean;
	access: 'public' | 'protected' | 'private';
	mutable: boolean;
	brief: string;
	detailedDescription: DoxygenParagraph[];
	return: DoxygenVariableReturn;
	location: DoxygenDefLocation;
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

export interface DoxygenEnumValueMemberDef extends DoxygenBaseDef {
	kind: 'enum-value';
}

export interface DoxygenInnerClassDef {
	id: string;
	name: string;
	access: 'public' | 'protected' | 'private';
}

export interface DoxygenInnerNamespaceDef {
	id: string;
	name: string;
}
