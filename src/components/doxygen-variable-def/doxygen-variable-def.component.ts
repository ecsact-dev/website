import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenVariableMemberDef } from '../../search/doxygen-def-types';
import { DoxygenLocationComponent } from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import { NgIf } from '@angular/common';

@Component({
	selector: 'doxygen-variable-def',
	preserveWhitespaces: true,
	templateUrl: './doxygen-variable-def.component.html',
	styleUrls: ['./doxygen-variable-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		DoxygenDescriptionComponent,
		DoxygenLocationComponent,
	],
})
export class DoxygenVariableDefComponent implements OnInit {
	@Input()
	def: DoxygenVariableMemberDef;

	constructor() { }

	ngOnInit(): void { }
}
