import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {
	DoxygenFunctionParameter,
	DoxygenParagraph,
} from '../../../search/doxygen-def-types';
import {DoxygenRefidLinkDirective} from '../../doxygen-refid-link/doxygen-refid-link.directive';
import {NgIf} from '@angular/common';
import {DoxygenContainerComponent} from '../doxygen-container/doxygen-container.component';

@Component({
	selector: 'doxygen-parameters',
	templateUrl: './doxygen-parameters.component.html',
	styleUrls: ['./doxygen-parameters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [DoxygenContainerComponent, NgIf, DoxygenRefidLinkDirective],
})
export class DoxygenParametersComponent {
	@Input()
	name: string;

	@Input()
	description: DoxygenParagraph[];

	@Input()
	type: string;

	@Input()
	typeRef: string;

	@Input()
	access: 'public' | 'protected' | 'private';

	@Input()
	initializer: string;

	constructor() {}
}
