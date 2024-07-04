import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImplementationsComponent } from './implementations.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: ImplementationsComponent,
			},
		]),
	],
	exports: [],
})
export class ImplementationsRoutingModule { }
