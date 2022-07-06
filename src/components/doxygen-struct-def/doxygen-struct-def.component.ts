import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenStructDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-struct-def',
	templateUrl: './doxygen-struct-def.component.html',
	styleUrls: ['./doxygen-struct-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenStructDefComponent implements OnInit {
	@Input()
	def: DoxygenStructDef;

	constructor() {}

	ngOnInit(): void {}
}
