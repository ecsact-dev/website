import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionMemberDef} from '../../search/doxygen-def-types';

export interface IDoxygenFunctionsTable {
	publicFunctions?: DoxygenFunctionMemberDef[];
	protectedFunctions?: DoxygenFunctionMemberDef[];
	privateFunctions?: DoxygenFunctionMemberDef[];
	publicStaticFunctions?: DoxygenFunctionMemberDef[];
	privateStaticFunctions?: DoxygenFunctionMemberDef[];
}

@Component({
	selector: 'doxygen-functions-table',
	preserveWhitespaces: true,
	templateUrl: './doxygen-functions-table.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenFunctionsTableComponent {
	@Input()
	def: IDoxygenFunctionsTable;
}
