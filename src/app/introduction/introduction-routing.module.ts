import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroductionComponent} from './introduction.component';
import {IntroductionModule} from './introduction.module';

@NgModule({
	imports: [
		IntroductionModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
				component: IntroductionComponent,
			},
		]),
	],
	exports: [],
})
export class IntroductionRoutingModule {}
