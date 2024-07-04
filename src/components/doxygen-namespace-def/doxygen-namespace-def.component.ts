import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenNamespaceDef} from '../../search/doxygen-def-types';
import {DoxygenLocationComponent} from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import {DoxygenVariableDefComponent} from '../doxygen-variable-def/doxygen-variable-def.component';
import {DoxygenRefidLinkDirective} from '../doxygen-refid-link/doxygen-refid-link.directive';
import {DoxygenChildBlockComponent} from '../doxygen-child-block/doxygen-child-block.component';
import {DoxygenDescriptionComponent} from '../doxygen-member-components/doxygen-description/doxygen-description.component';
import {NgIf, NgFor} from '@angular/common';
import {DoxygenNameComponent} from '../doxygen-member-components/doxygen-name/doxygen-name.component';
import {DoxygenParentBlockComponent} from '../doxygen-parent-block/doxygen-parent-block.component';

@Component({
	selector: 'doxygen-namespace-def',
	templateUrl: './doxygen-namespace-def.component.html',
	styleUrls: ['./doxygen-namespace-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		DoxygenParentBlockComponent,
		DoxygenNameComponent,
		NgIf,
		DoxygenDescriptionComponent,
		NgFor,
		DoxygenChildBlockComponent,
		DoxygenRefidLinkDirective,
		DoxygenVariableDefComponent,
		DoxygenLocationComponent,
	],
})
export class DoxygenNamespaceDefComponent implements OnInit {
	@Input()
	def: DoxygenNamespaceDef;

	constructor() {}

	ngOnInit(): void {}
}
