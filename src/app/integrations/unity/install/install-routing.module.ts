import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnityInstallPageComponent} from './install.component';
import {UnityInstallPageModule} from './install.module';

@NgModule({
	imports: [
		UnityInstallPageModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: UnityInstallPageComponent,
			},
		]),
	],
	exports: [],
})
export class UnityInstallPageRoutingModule {}
