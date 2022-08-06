import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemImplWasmComponent} from './system-impl-wasm.component';
import {EcsactWasmSystemImplValidatorModule} from '../../../components/ecsact-wasm-system-impl-validator/ecsact-wasm-system-impl-validator.module';

@NgModule({
	declarations: [SystemImplWasmComponent],
	imports: [CommonModule, EcsactWasmSystemImplValidatorModule],
	exports: [SystemImplWasmComponent],
})
export class SystemImplWasmModule {}
