import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionReturn} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-return',
	templateUrl: './doxygen-return.component.html',
	styleUrls: ['./doxygen-return.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenReturnComponent {
	@Input()
	return: DoxygenFunctionReturn;

	constructor() {}
}
