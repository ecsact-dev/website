import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmsdkCppComponent} from './emsdk-cpp.component';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {EcsactWasmSystemImplValidatorModule} from '../../../../components/ecsact-wasm-system-impl-validator/ecsact-wasm-system-impl-validator.module';
import {PrismModule} from '../../../../components/prism/prism.module';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';

@NgModule({
	declarations: [EmsdkCppComponent],
	imports: [
		CommonModule,
		RouterModule,
		EcsactLangSyntaxModule,
		EcsactWasmSystemImplValidatorModule,
		PrismModule,
		CodeBlockVariationModule,
	],
	exports: [EmsdkCppComponent],
})
export class EmsdkCppModule {}