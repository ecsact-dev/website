import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenVariableMemberDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-variable-def',
	preserveWhitespaces: true,
	templateUrl: './doxygen-variable-def.component.html',
	styleUrls: ['./doxygen-variable-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenVariableDefComponent implements OnInit {
	@Input()
	def: DoxygenVariableMemberDef;

	constructor() {}

	ngOnInit(): void {}
}
