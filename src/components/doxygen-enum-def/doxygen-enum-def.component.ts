import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenEnumMemberDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-enum-def',
	templateUrl: './doxygen-enum-def.component.html',
	styleUrls: ['./doxygen-enum-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenEnumDefComponent implements OnInit {
	@Input()
	def: DoxygenEnumMemberDef;

	constructor() {}

	ngOnInit(): void {}
}
