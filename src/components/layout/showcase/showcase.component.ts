import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

/**
 * Side navigation next to the main content. Only one of these should exist at
 * a time.
 */
@Component({
	selector: 'ecsact-showcase',
	templateUrl: './showcase.component.html',
	styleUrls: ['./showcase.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class ShowcaseComponent implements OnInit {
	constructor() {}

	@Input()
	img: string;

	@Input()
	title: string;

	@Input()
	description: string;

	ngOnInit(): void {}
}
