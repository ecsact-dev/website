import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	templateUrl: './start-godot.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class StartGodotComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
