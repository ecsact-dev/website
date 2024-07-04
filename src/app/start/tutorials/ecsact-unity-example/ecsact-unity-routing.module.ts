import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcsactUnityComponent } from './ecsact-unity.component';

const routes: Routes = [
	{
		path: '',
		component: EcsactUnityComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EcsactUnityRoutingModule { }
