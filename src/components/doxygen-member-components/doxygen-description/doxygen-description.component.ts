import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenParagraph} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-description',
	templateUrl: './doxygen-description.component.html',
	styleUrls: ['./doxygen-description.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenDescriptionComponent {
	@Input()
	description: DoxygenParagraph[];
	brief: string;

	constructor() {}
}
