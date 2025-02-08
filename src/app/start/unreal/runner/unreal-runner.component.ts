import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PrismComponent} from '../../../../components/prism/prism.component';

@Component({
	templateUrl: './unreal-runner.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink, PrismComponent],
})
export class UnrealRunnerComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
