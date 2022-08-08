import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmsdkCppComponent} from './emsdk-cpp.component';
import {EmsdkCppModule} from './emsdk-cpp.module';

const routes: Routes = [
	{
		path: '',
		component: EmsdkCppComponent,
	},
];

@NgModule({
	imports: [EmsdkCppModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EmsdkCppRoutingModule {}
