import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SetupComponent} from './setup.component';
import {SetupModule} from './setup.module';

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
