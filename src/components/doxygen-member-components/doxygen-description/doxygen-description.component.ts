import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenParagraph } from '../../../search/doxygen-def-types';
import { DoxygenParagraphComponent } from '../../doxygen-paragraph/doxygen-paragraph.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
	selector: 'doxygen-description',
	templateUrl: './doxygen-description.component.html',
	styleUrls: ['./doxygen-description.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		NgFor,
		DoxygenParagraphComponent,
	],
})
export class DoxygenDescriptionComponent {
	@Input()
	description: DoxygenParagraph[];

	@Input()
	brief?: string;

	constructor() { }
}
