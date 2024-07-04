import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EcsactLangSyntaxComponent} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {CodeBlockVariationOptionDirective} from '../../../../components/code-block-variation/code-block-variation-option.directive';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';

@Component({
	templateUrl: './first-ecsact-file.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
		EcsactLangSyntaxComponent,
		RouterLink,
	],
})
export class FirstEcsactFileComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
