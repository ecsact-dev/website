import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GetStartedComponent} from './getstarted.component';
import {GetStartedModule} from './getstarted.module';

@NgModule({
	imports: [
		GetStartedModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: GetStartedComponent,
			},
		]),
	],
	exports: [],
})
export class GetStartedRoutingModule {}
