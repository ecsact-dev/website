import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenEnumValueMemberDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-enumvalue-def',
	templateUrl: './doxygen-enumvalue-def.component.html',
	styleUrls: ['./doxygen-enumvalue-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenEnumValueDefComponent implements OnInit {
	@Input()
	def: DoxygenEnumValueMemberDef;

	constructor() {}

	ngOnInit(): void {}
}
