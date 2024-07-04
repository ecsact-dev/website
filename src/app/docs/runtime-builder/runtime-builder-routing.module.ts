import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Runtime_BuilderComponent } from './runtime-builder.component';

@NgModule({
	imports: [
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
export class Runtime_BuilderRoutingModule { }
