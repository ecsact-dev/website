import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { NgFor } from '@angular/common';

export interface ExecutionLaneStep {
	systems: string[];
}

@Component({
	selector: 'ecsact-exec-lane-vis',
	templateUrl: './exec-lane-vis.component.html',
	styleUrls: ['./exec-lane-vis.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgFor],
})
export class ExecLaneVisComponent implements OnInit {
	@Input()
	steps: ExecutionLaneStep[] = [];

	constructor() { }

	ngOnInit(): void { }
}
