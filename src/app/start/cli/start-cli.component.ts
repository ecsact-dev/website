import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {TypedAsciiLogoComponent} from './typed-ascii-logo.component';
import {RouterLink} from '@angular/router';
import {PrismComponent} from '../../../components/prism/prism.component';

@Component({
	templateUrl: './start-cli.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [TypedAsciiLogoComponent, RouterLink, PrismComponent],
})
export class StartCliComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
