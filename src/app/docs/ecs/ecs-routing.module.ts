import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcsComponent } from './ecs.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: EcsComponent,
			},
		]),
	],
	exports: [],
})
export class EcsRoutingModule { }
