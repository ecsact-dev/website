import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstEcsactFileComponent} from './first-ecsact-file.component';
import {FirstEcsactFileModule} from './first-ecsact-file.module';

const routes: Routes = [
	{
		path: '',
		component: FirstEcsactFileComponent,
	},
];

@NgModule({
	imports: [FirstEcsactFileModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FirstEcsactFileRoutingModule {}
