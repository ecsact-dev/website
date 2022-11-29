import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CppToWasmComponent} from './cpp-to-wasm.component';

@NgModule({
	declarations: [CppToWasmComponent],
	imports: [CommonModule],
	exports: [CppToWasmComponent],
})
export class CppToWasmModule {}
