import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnitySyncComponent} from './unity-sync.component';
import {UnitySyncModule} from './unity-sync.module';

@NgModule({
	imports: [
		UnitySyncModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: UnitySyncComponent,
			},
		]),
	],
	exports: [],
})
export class UnitySyncRoutingModule {}
