import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

/**
 * Side navigation section. Should onyl be used inside ecsact-sidenav
 */
@Component({
	selector: 'ecsact-sidenav > ecsact-sidenav-section',
	templateUrl: './sidenav-section.component.html',
	styleUrls: ['./sidenav-section.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavSectionComponent implements OnInit {
	@Input()
	title: string;

	constructor() {}

	ngOnInit(): void {}
}
