import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstEcsactFileComponent } from './first-ecsact-file.component';

const routes: Routes = [
	{
		path: '',
		component: FirstEcsactFileComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FirstEcsactFileRoutingModule { }
