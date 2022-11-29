import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CppToWasmComponent} from './cpp-to-wasm.component';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {PrismModule} from '../../../../components/prism/prism.module';
import {EcsactWasmSystemImplValidatorModule} from '../../../../components/ecsact-wasm-system-impl-validator/ecsact-wasm-system-impl-validator.module';

@NgModule({
	declarations: [CppToWasmComponent],
	imports: [
		CommonModule,
		RouterModule,
		CodeBlockVariationModule,
		PrismModule,
		EcsactWasmSystemImplValidatorModule,
	],
	exports: [CppToWasmComponent],
})
export class CppToWasmModule {}
