import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'using-async',
	templateUrl: './using-async.component.html',
	styleUrls: ['./using-async.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsingAsyncComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
