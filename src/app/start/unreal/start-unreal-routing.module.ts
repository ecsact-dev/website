import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./start-unreal.component').then(m => m.StartUnrealComponent),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartUnrealRoutingRoutingModule { }
