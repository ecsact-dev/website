import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartOverviewComponent} from './start-overview.component';
import {StartComponent} from './start.component';

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
			import('./unity/start-unity-routing.module').then(
				m => m.StartUnityRoutingRoutingModule,
			),
	},
	{
		path: 'cli',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./cli/start-cli-routing.module').then(
				m => m.StartCliRoutingModule,
			),
	},
	{
		path: 'godot',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./godot/start-godot-routing.module').then(
				m => m.StartGodotRoutingRoutingModule,
			),
	},
	{
		path: 'unreal',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./unreal/start-unreal-routing.module').then(
				m => m.StartUnrealRoutingRoutingModule,
			),
	},
	{
		path: 'custom',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./custom/start-custom-routing.module').then(
				m => m.StartCustomRoutingRoutingModule,
			),
	},
	{
		path: 'tutorials',
		loadChildren: () =>
			import('./tutorials/tutorials-routing.module').then(
				m => m.TutorialsRoutingModule,
			),
	},
];

@NgModule({
	imports: [
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
