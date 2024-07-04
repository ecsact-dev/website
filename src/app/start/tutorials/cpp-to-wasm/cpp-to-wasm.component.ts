import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';
import {PrismComponent} from '../../../../components/prism/prism.component';
import {EcsactWasmSystemImplValidatorComponent} from '../../../../components/ecsact-wasm-system-impl-validator/ecsact-wasm-system-impl-validator.component';
import {CodeBlockVariationOptionDirective} from '../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	templateUrl: './cpp-to-wasm.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
		PrismComponent,
		EcsactWasmSystemImplValidatorComponent,
	],
})
export class CppToWasmComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
