import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () =>
			import('./start-unreal.component').then(m => m.StartUnrealComponent),
	},
	{
		path: 'codegen',
		pathMatch: 'full',
		loadComponent: () =>
			import('./codegen/unreal-codegen.component').then(
				m => m.UnrealCodegenComponent,
			),
	},
	{
		path: 'runner',
		pathMatch: 'full',
		loadComponent: () =>
			import('./runner/unreal-runner.component').then(
				m => m.UnrealRunnerComponent,
			),
	},
	{
		path: 'runtime',
		pathMatch: 'full',
		loadComponent: () =>
			import('./runtime/unreal-runtime.component').then(
				m => m.UnrealRuntimeComponent,
			),
	},
	{
		path: 'subsystems',
		pathMatch: 'full',
		loadComponent: () =>
			import('./subsystems/unreal-subsystems.component').then(
				m => m.UnrealSubsystemsComponent,
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartUnrealRoutingRoutingModule {}
