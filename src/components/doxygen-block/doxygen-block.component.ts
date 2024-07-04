import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenDataTypeDef } from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-block',
	templateUrl: './doxygen-block.component.html',
	styleUrls: ['./doxygen-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class DoxygenBlockComponent implements OnInit {
	@Input()
	def: DoxygenDataTypeDef;

	constructor() { }

	ngOnInit(): void { }
}
