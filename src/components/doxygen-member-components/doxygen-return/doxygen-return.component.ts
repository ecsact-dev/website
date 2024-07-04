import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionReturn} from '../../../search/doxygen-def-types';
import {DoxygenContainerComponent} from '../doxygen-container/doxygen-container.component';

@Component({
	selector: 'doxygen-return',
	templateUrl: './doxygen-return.component.html',
	styleUrls: ['./doxygen-return.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [DoxygenContainerComponent],
})
export class DoxygenReturnComponent {
	@Input()
	return: DoxygenFunctionReturn;

	constructor() {}
}
