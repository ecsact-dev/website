import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenTypedefMemberDef } from '../../search/doxygen-def-types';
import { DoxygenLocationComponent } from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import { DoxygenDefinitionComponent } from '../doxygen-member-components/doxygen-definition/doxygen-definition.component';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import { NgIf } from '@angular/common';

@Component({
	selector: 'doxygen-typedef-def',
	templateUrl: './doxygen-typedef-def.component.html',
	styleUrls: ['./doxygen-typedef-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		DoxygenDescriptionComponent,
		DoxygenDefinitionComponent,
		DoxygenLocationComponent,
	],
})
export class DoxygenTypedefDefComponent implements OnInit {
	@Input()
	def: DoxygenTypedefMemberDef;

	constructor() { }

	ngOnInit(): void { }
}
