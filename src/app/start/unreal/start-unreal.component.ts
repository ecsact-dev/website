import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	templateUrl: './start-unreal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class StartUnrealComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
