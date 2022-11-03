import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntitiesComponent} from './entities.component';
import {EntitiesModule} from './entities.module';

@NgModule({
	imports: [
		EntitiesModule,
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
