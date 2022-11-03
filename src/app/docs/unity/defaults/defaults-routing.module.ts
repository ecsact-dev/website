import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultsComponent} from './defaults.component';
import {DefaultsModule} from './defaults.module';

@NgModule({
	imports: [
		DefaultsModule,
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
export class DefaultsRoutingModule {}
