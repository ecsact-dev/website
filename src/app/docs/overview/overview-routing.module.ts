import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview.component';
import {OverviewModule} from './overview.module';

@NgModule({
	imports: [
		OverviewModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: OverviewComponent,
			},
		]),
	],
	exports: [],
})
export class OverviewRoutingModule {}
