import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenVariableMemberDef} from '../../search/doxygen-def-types';

export interface IDoxygenVariablesTable {
	publicVariables?: DoxygenVariableMemberDef[];
	privateVariables?: DoxygenVariableMemberDef[];
}

@Component({
	selector: 'doxygen-variables-table',
	preserveWhitespaces: true,
	templateUrl: './doxygen-variables-table.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenVariablesTableComponent {
	@Input()
	def: IDoxygenVariablesTable;
}
