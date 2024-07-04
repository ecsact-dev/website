import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenDefineMemberDef} from '../../search/doxygen-def-types';
import {DoxygenLocationComponent} from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import {DoxygenDescriptionComponent} from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import {NgIf, NgFor} from '@angular/common';

@Component({
	selector: 'doxygen-define-def',
	templateUrl: './doxygen-define-def.component.html',
	styleUrls: ['./doxygen-define-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgIf, DoxygenDescriptionComponent, NgFor, DoxygenLocationComponent],
})
export class DoxygenDefineDefComponent implements OnInit {
	@Input()
	def: DoxygenDefineMemberDef;

	constructor() {}

	ngOnInit(): void {}
}
