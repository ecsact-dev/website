import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

/**
 * Side navigation next to the main content. Only one of these should exist at
 * a time.
 */
@Component({
	selector: 'ecsact-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
