import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RuntimeComponent} from './runtime.component';
import {RuntimeModule} from './runtime.module';

@NgModule({
	imports: [
		RuntimeModule,
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
