import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenTypedefMemberDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-typedef-def',
	templateUrl: './doxygen-typedef-def.component.html',
	styleUrls: ['./doxygen-typedef-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenTypedefDefComponent implements OnInit {
	@Input()
	def: DoxygenTypedefMemberDef;

	constructor() {}

	ngOnInit(): void {}
}
