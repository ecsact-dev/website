import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EcsModule} from './ecs.module';

import {EcsComponent} from './ecs.component';

@NgModule({
	imports: [
		EcsModule,
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
export class EcsRoutingModule {}
