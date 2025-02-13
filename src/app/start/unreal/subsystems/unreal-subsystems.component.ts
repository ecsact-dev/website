import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PrismComponent} from '../../../../components/prism/prism.component';
import {EcsactLangSyntaxComponent} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';
import {CodeBlockVariationOptionDirective} from '../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	templateUrl: './unreal-subsystems.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		RouterLink,
		PrismComponent,
		EcsactLangSyntaxComponent,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
	],
})
export class UnrealSubsystemsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
