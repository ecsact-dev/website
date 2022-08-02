import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetupModule} from './setup.module';

import {SetupComponent} from './setup.component';

@NgModule({
	imports: [
		SetupModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: SetupComponent,
			},
		]),
	],
	exports: [],
})
export class SetupRoutingModule {}
