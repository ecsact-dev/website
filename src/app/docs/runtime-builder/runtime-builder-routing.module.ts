import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Runtime_BuilderComponent} from './runtime-builder.component';
import {Runtime_BuilderModule} from './runtime-builder.module';

@NgModule({
	imports: [
		Runtime_BuilderModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: Runtime_BuilderComponent,
			},
		]),
	],
	exports: [],
})
export class Runtime_BuilderRoutingModule {}
