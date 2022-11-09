import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemImplComponent} from './system-impl.component';
import {SystemImplModule} from './system-impl.module';

@NgModule({
	imports: [
		SystemImplModule,
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
export class SystemImplRoutingModule {}
