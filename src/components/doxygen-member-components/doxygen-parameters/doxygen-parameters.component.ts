import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionParameter} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-parameters',
	templateUrl: './doxygen-parameters.component.html',
	styleUrls: ['./doxygen-parameters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenParametersComponent {
	@Input()
	parameters: DoxygenFunctionParameter[];

	constructor() {}
}
