import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartUnityComponent} from './start-unity.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartUnityComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartUnityRoutingRoutingModule {}
