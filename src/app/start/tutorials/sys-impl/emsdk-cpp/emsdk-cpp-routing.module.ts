import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmsdkCppComponent } from './emsdk-cpp.component';

const routes: Routes = [
	{
		path: '',
		component: EmsdkCppComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EmsdkCppRoutingModule { }
