import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InstallComponent} from './install.component';
import {InstallModule} from './install.module';

@NgModule({
	imports: [
		InstallModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: InstallComponent,
			},
		]),
	],
	exports: [],
})
export class InstallRoutingModule {}
