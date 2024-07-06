import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TypedAsciiLogoComponent} from './typed-ascii-logo.component';

@Component({
	templateUrl: './start-cli.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TypedAsciiLogoComponent],
})
export class StartCliComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
