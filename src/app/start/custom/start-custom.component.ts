import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	templateUrl: './start-custom.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartCustomComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
