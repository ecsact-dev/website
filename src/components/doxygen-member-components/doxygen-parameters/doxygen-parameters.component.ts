import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {
	DoxygenFunctionParameter,
	DoxygenParagraph,
} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-parameters',
	templateUrl: './doxygen-parameters.component.html',
	styleUrls: ['./doxygen-parameters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenParametersComponent {
	@Input()
	name: string;

	@Input()
	description: DoxygenParagraph[];

	@Input()
	type: string;

	@Input()
	typeRef?: string;

	@Input()
	access: 'public' | 'protected' | 'private';

	@Input()
	initializer: string;

	constructor() {}
}
