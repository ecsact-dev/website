import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenDefineMemberDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-define-def',
	templateUrl: './doxygen-define-def.component.html',
	styleUrls: ['./doxygen-define-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenDefineDefComponent implements OnInit {
	@Input()
	def: DoxygenDefineMemberDef;

	constructor() {}

	ngOnInit(): void {}
}
