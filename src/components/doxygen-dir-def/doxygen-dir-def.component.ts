import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenDirDef} from '../../search/doxygen-def-types';
import {DoxygenLocationComponent} from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import {DoxygenRefidLinkDirective} from '../doxygen-refid-link/doxygen-refid-link.directive';
import {DoxygenDescriptionComponent} from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import {NgIf, NgFor} from '@angular/common';
import {DoxygenParentBlockComponent} from '../doxygen-parent-block/doxygen-parent-block.component';

@Component({
	selector: 'doxygen-dir-def',
	templateUrl: './doxygen-dir-def.component.html',
	styleUrls: ['./doxygen-dir-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		DoxygenParentBlockComponent,
		NgIf,
		DoxygenDescriptionComponent,
		NgFor,
		DoxygenRefidLinkDirective,
		DoxygenLocationComponent,
	],
})
export class DoxygenDirDefComponent implements OnInit {
	@Input()
	def: DoxygenDirDef;

	constructor() {}

	ngOnInit(): void {}
}
