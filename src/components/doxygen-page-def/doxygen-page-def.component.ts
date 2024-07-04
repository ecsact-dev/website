import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenPageDef } from '../../search/doxygen-def-types';
import { DoxygenParagraphComponent } from '../doxygen-paragraph/doxygen-paragraph.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
	selector: 'doxygen-page-def',
	templateUrl: './doxygen-page-def.component.html',
	styleUrls: ['./doxygen-page-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		NgFor,
		DoxygenParagraphComponent,
	],
})
export class DoxygenPageDefComponent implements OnInit {
	@Input()
	page: DoxygenPageDef;

	constructor() { }

	ngOnInit(): void { }
}
