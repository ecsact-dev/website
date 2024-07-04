import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenDataTypeDef } from '../../search/doxygen-def-types';
import { DoxygenFunctionsTableComponent } from '../doxygen-functions-table/doxygen-functions-table.component';
import { DoxygenVariablesTableComponent } from '../doxygen-variables-table/doxygen-variables-table.component';
import { DoxygenTypesTableComponent } from '../doxygen-types-table/doxygen-types-table.component';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import { NgIf } from '@angular/common';
import { DoxygenNameComponent } from '../doxygen-member-components/doxygen-name/doxygen-name.component';
import { DoxygenLocationComponent } from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import { DoxygenParentBlockComponent } from '../doxygen-parent-block/doxygen-parent-block.component';

@Component({
	selector: 'doxygen-datatype-def',
	templateUrl: './doxygen-datatype-def.component.html',
	styleUrls: ['./doxygen-datatype-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		DoxygenParentBlockComponent,
		DoxygenLocationComponent,
		DoxygenNameComponent,
		NgIf,
		DoxygenDescriptionComponent,
		DoxygenTypesTableComponent,
		DoxygenVariablesTableComponent,
		DoxygenFunctionsTableComponent,
	],
})
export class DoxygenDataTypeDefComponent implements OnInit {
	@Input()
	def: DoxygenDataTypeDef;

	constructor() { }

	ngOnInit(): void { }
}
