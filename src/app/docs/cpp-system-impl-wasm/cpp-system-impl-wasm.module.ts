import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CppSystemImplWasmComponent} from './cpp-system-impl-wasm.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [CppSystemImplWasmComponent],
	imports: [CommonModule, RouterModule],
	exports: [CppSystemImplWasmComponent],
})
export class CppSystemImplWasmModule {}
