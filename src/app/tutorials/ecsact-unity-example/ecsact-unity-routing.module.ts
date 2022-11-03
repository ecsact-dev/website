import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EcsactUnityComponent} from './ecsact-unity.component';
import {EcsactUnityModule} from './ecsact-unity.module';

const routes: Routes = [
	{
		path: '',
		component: EcsactUnityComponent,
	},
];

@NgModule({
	imports: [EcsactUnityModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EcsactUnityRoutingModule {}
