import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoadmapComponent} from './roadmap.component';
import {RoadmapModule} from './roadmap.module';

@NgModule({
	imports: [
		RoadmapModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: RoadmapComponent,
			},
		]),
	],
	exports: [],
})
export class RoadmapRoutingModule {}
