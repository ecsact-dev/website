import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'basic-example',
	templateUrl: './basic-example.component.html',
	styleUrls: ['./basic-example.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicExampleComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
