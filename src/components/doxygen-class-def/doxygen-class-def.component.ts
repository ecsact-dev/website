import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenClassDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-class-def',
	templateUrl: './doxygen-class-def.component.html',
	styleUrls: ['./doxygen-class-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenClassDefComponent implements OnInit {
	@Input()
	def: DoxygenClassDef;

	constructor() {}

	ngOnInit(): void {}
}
