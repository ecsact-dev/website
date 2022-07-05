import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReferenceComponent} from './reference.component';
import {ReferenceModule} from './reference.module';

@NgModule({
	imports: [
		ReferenceModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: ReferenceComponent,
			},
		]),
	],
	exports: [],
})
export class ReferenceRoutingModule {}
