import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {
	DoxygenMarkup,
	DoxygenParagraph,
	DoxygenPlainText,
	DoxygenText,
} from '../../search/doxygen-def-types';
import {NgFor, NgIf, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
	selector: 'doxygen-paragraph',
	templateUrl: './doxygen-paragraph.component.html',
	styleUrls: ['./doxygen-paragraph.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgFor, NgIf, NgSwitch, NgSwitchCase],
})
export class DoxygenParagraphComponent implements OnInit {
	@Input()
	paragraph: DoxygenParagraph;

	constructor() {}

	ngOnInit(): void {}

	isPlainText(value: DoxygenText | DoxygenMarkup): value is DoxygenPlainText {
		return typeof value === 'string';
	}

	isMarkup(value: DoxygenText | DoxygenMarkup): value is DoxygenMarkup {
		return typeof value !== 'string';
	}
}
