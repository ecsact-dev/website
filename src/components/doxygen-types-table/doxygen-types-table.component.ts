import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenTypedefMemberDef} from '../../search/doxygen-def-types';

export interface IDoxygenTypesTable {
	publicTypes?: DoxygenTypedefMemberDef[];
	privateTypes?: DoxygenTypedefMemberDef[];
	protectedTypes?: DoxygenTypedefMemberDef[];
}

@Component({
	selector: 'doxygen-types-table',
	preserveWhitespaces: true,
	templateUrl: './doxygen-types-table.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenTypesTableComponent {
	@Input()
	def: IDoxygenTypesTable;
}
