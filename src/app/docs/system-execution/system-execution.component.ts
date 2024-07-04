import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ExecLaneVisComponent } from '../../../components/exec-lane-vis/exec-lane-vis.component';
import { CodeBlockVariationOptionDirective } from '../../../components/code-block-variation/code-block-variation-option.directive';
import { CodeBlockVariationComponent } from '../../../components/code-block-variation/code-block-variation.component';
import { RouterLink } from '@angular/router';
import { EcsactLangSyntaxComponent } from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';

@Component({
	templateUrl: './system-execution.component.html',
	styleUrls: ['./system-execution.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		EcsactLangSyntaxComponent,
		RouterLink,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
		ExecLaneVisComponent,
	],
})
export class SystemExecutionComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
