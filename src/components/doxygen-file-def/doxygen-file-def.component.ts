import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFileDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-file-def',
	templateUrl: './doxygen-file-def.component.html',
	styleUrls: ['./doxygen-file-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenFileDefComponent implements OnInit {
	@Input()
	def: DoxygenFileDef;

	constructor() {}

	ngOnInit(): void {}
}
