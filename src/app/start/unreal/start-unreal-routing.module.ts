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
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartUnrealRoutingRoutingModule {}
