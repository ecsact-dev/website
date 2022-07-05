import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	templateUrl: './lang.component.html',
	styleUrls: ['./lang.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
