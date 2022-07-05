import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialsComponent} from './tutorials.component';
import {TutorialsModule} from './tutorials.module';

@NgModule({
	imports: [
		TutorialsModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: TutorialsComponent,
			},
		]),
	],
	exports: [],
})
export class TutorialsRoutingModule {}
