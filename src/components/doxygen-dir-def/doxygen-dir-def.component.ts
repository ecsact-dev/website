import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenDirDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-dir-def',
	templateUrl: './doxygen-dir-def.component.html',
	styleUrls: ['./doxygen-dir-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenDirDefComponent implements OnInit {
	@Input()
	def: DoxygenDirDef;

	constructor() {}

	ngOnInit(): void {}
}
