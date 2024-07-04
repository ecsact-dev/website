import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				loadComponent: () => import('./home.component').then(m => m.HomeComponent),
			},
		]),
	],
	exports: [],
})
export class HomeRoutingModule { }
