import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemImplComponent } from './system-impl.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: SystemImplComponent,
			},
		]),
	],
	exports: [],
})
export class SystemImplRoutingModule { }
