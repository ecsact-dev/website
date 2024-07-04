import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenVariableMemberDef } from '../../search/doxygen-def-types';
import { HiddenTableRowComponent } from '../hidden-table-rows/hidden-table-row.component';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import { DoxygenRefidLinkDirective } from '../doxygen-refid-link/doxygen-refid-link.directive';
import { DoxygenTypeNameComponent } from '../doxygen-type-name/doxygen-type-name.component';
import { NgIf, NgFor } from '@angular/common';
import { HiddenTableRowsDirective } from '../hidden-table-rows/hidden-table-rows.directive';

export interface IDoxygenVariablesTable {
	publicVariables?: DoxygenVariableMemberDef[];
	privateVariables?: DoxygenVariableMemberDef[];
}

@Component({
	selector: 'doxygen-variables-table',
	preserveWhitespaces: true,
	templateUrl: './doxygen-variables-table.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		HiddenTableRowsDirective,
		NgIf,
		NgFor,
		DoxygenTypeNameComponent,
		DoxygenRefidLinkDirective,
		DoxygenDescriptionComponent,
		HiddenTableRowComponent,
	],
})
export class DoxygenVariablesTableComponent {
	@Input()
	def: IDoxygenVariablesTable;
}
