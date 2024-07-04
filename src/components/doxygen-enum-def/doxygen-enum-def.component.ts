import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenEnumMemberDef } from '../../search/doxygen-def-types';
import { DoxygenLocationComponent } from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import { NgFor, NgIf } from '@angular/common';
import { DoxygenNameComponent } from '../doxygen-member-components/doxygen-name/doxygen-name.component';

@Component({
	selector: 'doxygen-enum-def',
	templateUrl: './doxygen-enum-def.component.html',
	styleUrls: ['./doxygen-enum-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		DoxygenNameComponent,
		NgFor,
		NgIf,
		DoxygenDescriptionComponent,
		DoxygenLocationComponent,
	],
})
export class DoxygenEnumDefComponent implements OnInit {
	@Input()
	def: DoxygenEnumMemberDef;

	constructor() { }

	ngOnInit(): void { }
}
