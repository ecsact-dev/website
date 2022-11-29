import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CppToWasmComponent} from './cpp-to-wasm.component';
import {CppToWasmModule} from './cpp-to-wasm.module';

const routes: Routes = [
	{
		path: '',
		component: CppToWasmComponent,
	},
];

@NgModule({
	imports: [CppToWasmModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CppToWasmRoutingModule {}
