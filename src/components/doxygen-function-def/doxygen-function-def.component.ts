import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionMemberDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-function-def',
	preserveWhitespaces: true,
	templateUrl: './doxygen-function-def.component.html',
	styleUrls: ['./doxygen-function-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenFunctionDefComponent implements OnInit {
	@Input()
	def: DoxygenFunctionMemberDef;

	@Input()
	page_id: string;
	constructor() {}

	ngOnInit(): void {}
}
