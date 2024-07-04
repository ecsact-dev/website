import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnitySyncComponent} from './unity-sync.component';

@NgModule({
	imports: [
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
