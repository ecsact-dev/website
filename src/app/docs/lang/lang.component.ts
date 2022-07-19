import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

const DEFINE_COMPONENT_SAMPLE_01 = `
package example;

component Position {
	int32 x;
	int32 y;
}
`.trim();

@Component({
	templateUrl: './lang.component.html',
	styleUrls: ['./lang.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangComponent implements OnInit {
	readonly DEFINE_COMPONENT_SAMPLE_01 = DEFINE_COMPONENT_SAMPLE_01;
	constructor() {}

	ngOnInit(): void {}
}