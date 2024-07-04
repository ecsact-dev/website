import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultsComponent } from './defaults.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: DefaultsComponent,
			},
		]),
	],
	exports: [],
})
export class DefaultsRoutingModule { }
