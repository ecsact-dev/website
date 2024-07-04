import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxComponent} from '../../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {EcsactWasmSystemImplValidatorComponent} from '../../../../../components/ecsact-wasm-system-impl-validator/ecsact-wasm-system-impl-validator.component';
import {PrismComponent} from '../../../../../components/prism/prism.component';
import {CodeBlockVariationComponent} from '../../../../../components/code-block-variation/code-block-variation.component';
import {CodeBlockVariationOptionDirective} from '../../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	selector: 'ecsact-emsdk-cpp',
	templateUrl: './emsdk-cpp.component.html',
	styleUrls: ['./emsdk-cpp.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		EcsactLangSyntaxComponent,
		EcsactWasmSystemImplValidatorComponent,
		PrismComponent,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
	],
})
export class EmsdkCppComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
