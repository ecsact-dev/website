import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenDataTypeDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-datatype-def',
	templateUrl: './doxygen-datatype-def.component.html',
	styleUrls: ['./doxygen-datatype-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenDataTypeDefComponent implements OnInit {
	@Input()
	def: DoxygenDataTypeDef;

	constructor() {}

	ngOnInit(): void {}
}
