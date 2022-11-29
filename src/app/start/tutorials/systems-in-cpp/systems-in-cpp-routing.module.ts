import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemsInCppComponent} from './systems-in-cpp.component';
import {SystemsInCppModule} from './systems-in-cpp.module';

const routes: Routes = [
	{
		path: '',
		component: SystemsInCppComponent,
	},
];

@NgModule({
	imports: [SystemsInCppModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SystemsInCppRoutingModule {}
