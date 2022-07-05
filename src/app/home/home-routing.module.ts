import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {HomeModule} from './home.module';

@NgModule({
	imports: [
		HomeModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: HomeComponent,
			},
		]),
	],
	exports: [],
})
export class HomeRoutingModule {}
