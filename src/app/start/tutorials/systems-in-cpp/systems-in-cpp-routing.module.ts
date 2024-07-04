import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemsInCppComponent } from './systems-in-cpp.component';

const routes: Routes = [
	{
		path: '',
		component: SystemsInCppComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SystemsInCppRoutingModule { }
