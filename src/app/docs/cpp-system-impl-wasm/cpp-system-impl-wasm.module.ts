import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CppSystemImplWasmComponent} from './cpp-system-impl-wasm.component';
import {RouterModule} from '@angular/router';
import {PrismModule} from '../../../components/prism/prism.module';

@NgModule({
	declarations: [CppSystemImplWasmComponent],
	imports: [CommonModule, RouterModule, PrismModule],
	exports: [CppSystemImplWasmComponent],
})
export class CppSystemImplWasmModule {}
