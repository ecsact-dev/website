import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocsComponent} from './docs.component';
import {DocsModule} from './docs.module';

@NgModule({
	imports: [
		DocsModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: DocsComponent,
			},
		]),
	],
	exports: [],
})
export class DocsRoutingModule {}
