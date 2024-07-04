import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CppToWasmComponent } from './cpp-to-wasm.component';

const routes: Routes = [
	{
		path: '',
		component: CppToWasmComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CppToWasmRoutingModule { }
