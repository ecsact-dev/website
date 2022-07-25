import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionParameter} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-name',
	preserveWhitespaces: true,
	templateUrl: './doxygen-name.component.html',
	styleUrls: ['./doxygen-name.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenNameComponent {
	@Input()
	combinedName: string;

	@Input()
	name: string;

	@Input()
	link: string;

	@Input()
	page_id: string;

	constructor() {}
}
