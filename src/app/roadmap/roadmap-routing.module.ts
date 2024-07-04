import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				loadComponent: () => import('./roadmap.component').then(m => m.RoadmapComponent),
			},
		]),
	],
	exports: [],
})
export class RoadmapRoutingModule { }
