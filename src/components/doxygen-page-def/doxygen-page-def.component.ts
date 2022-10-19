import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenPageDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-page-def',
	templateUrl: './doxygen-page-def.component.html',
	styleUrls: ['./doxygen-page-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenPageDefComponent implements OnInit {
	@Input()
	page: DoxygenPageDef;

	constructor() {}

	ngOnInit(): void {}
}
