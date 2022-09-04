import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

export interface ExecutionLaneStep {
	systems: string[];
}

@Component({
	selector: 'ecsact-exec-lane-vis',
	templateUrl: './exec-lane-vis.component.html',
	styleUrls: ['./exec-lane-vis.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecLaneVisComponent implements OnInit {
	@Input()
	steps: ExecutionLaneStep[] = [];

	constructor() {}

	ngOnInit(): void {}
}
