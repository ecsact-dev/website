import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionMemberDef} from '../../search/doxygen-def-types';
import { HiddenTableRowComponent } from '../hidden-table-rows/hidden-table-row.component';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import { DoxygenRefidLinkDirective } from '../doxygen-refid-link/doxygen-refid-link.directive';
import { DoxygenTypeNameComponent } from '../doxygen-type-name/doxygen-type-name.component';
import { NgIf, NgFor } from '@angular/common';
import { HiddenTableRowsDirective } from '../hidden-table-rows/hidden-table-rows.directive';

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
export class DoxygenFunctionsTableComponent {
	@Input()
	def: IDoxygenFunctionsTable;
}
