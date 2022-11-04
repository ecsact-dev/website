import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartUnrealComponent} from './start-unreal.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartUnrealComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartUnrealRoutingRoutingModule {}
