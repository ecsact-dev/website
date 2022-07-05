import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImplementationsComponent} from './implementations.component';
import {ImplementationsModule} from './implementations.module';

@NgModule({
	imports: [
		ImplementationsModule,
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
export class ImplementationsRoutingModule {}
