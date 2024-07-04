import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RuntimeComponent} from './runtime.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: RuntimeComponent,
			},
		]),
	],
	exports: [],
})
export class RuntimeRoutingModule {}
