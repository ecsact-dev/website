import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartOverviewComponent} from './start-overview.component';
import {StartComponent} from './start.component';
import {StartModule} from './start.module';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartOverviewComponent,
	},
	{
		path: 'unity',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./unity/start-unity-routing-routing.module').then(
				m => m.StartUnityRoutingRoutingModule,
			),
	},
	{
		path: 'godot',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./godot/start-godot-routing-routing.module').then(
				m => m.StartGodotRoutingRoutingModule,
			),
	},
	{
		path: 'unreal',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./unreal/start-unreal-routing-routing.module').then(
				m => m.StartUnrealRoutingRoutingModule,
			),
	},
	{
		path: 'custom',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./custom/start-custom-routing-routing.module').then(
				m => m.StartCustomRoutingRoutingModule,
			),
	},
];

@NgModule({
	imports: [
		StartModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'prefix',
				children: routes,
				component: StartComponent,
			},
		]),
	],
	exports: [],
})
export class StartRoutingModule {}
