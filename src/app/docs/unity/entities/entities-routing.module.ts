import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntitiesComponent} from './entities.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: EntitiesComponent,
			},
		]),
	],
	exports: [],
})
export class EntitiesRoutingModule {}
