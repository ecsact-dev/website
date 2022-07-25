import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
	selector: 'doxygen-kind',
	templateUrl: './doxygen-kind.component.html',
	styleUrls: ['./doxygen-kind.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenKindComponent {
	@Input()
	kind: string;

	constructor() {}
}
