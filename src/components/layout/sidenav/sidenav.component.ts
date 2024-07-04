import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CdkAccordion} from '@angular/cdk/accordion';

/**
 * Side navigation next to the main content. Only one of these should exist at
 * a time.
 */
@Component({
	selector: 'ecsact-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CdkAccordion],
})
export class SidenavComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
