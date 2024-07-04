import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				loadComponent: () => import('./install.component').then(m => m.InstallComponent),
			},
		]),
	],
	exports: [],
})
export class InstallRoutingModule { }
