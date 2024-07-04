import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
	templateUrl: './start-custom.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink],
})
export class StartCustomComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
