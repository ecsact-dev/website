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

export interface DoxygenFunctionMemberDef extends DoxygenBaseDef {
	kind: 'function';
	name: string;
	static: boolean;
	const: boolean;
	explicit: boolean;
	inline: boolean;
	access: 'public' | 'protected' | 'private';
}
