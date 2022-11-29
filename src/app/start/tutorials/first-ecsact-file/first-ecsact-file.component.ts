import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	templateUrl: './first-ecsact-file.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstEcsactFileComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
