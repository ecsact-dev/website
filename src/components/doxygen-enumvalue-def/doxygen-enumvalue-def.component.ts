import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenEnumValueMemberDef } from '../../search/doxygen-def-types';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'doxygen-enumvalue-def',
	templateUrl: './doxygen-enumvalue-def.component.html',
	styleUrls: ['./doxygen-enumvalue-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [JsonPipe],
})
export class DoxygenEnumValueDefComponent implements OnInit {
	@Input()
	def: DoxygenEnumValueMemberDef;

	constructor() { }

	ngOnInit(): void { }
}
