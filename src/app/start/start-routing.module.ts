import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start.component';
import {StartModule} from './start.module';

@NgModule({
	imports: [
		StartModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: StartComponent,
			},
		]),
	],
	exports: [],
})
export class StartRoutingModule {}
