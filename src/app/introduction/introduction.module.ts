import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {IntroductionComponent} from './introduction.component';

@NgModule({
	declarations: [IntroductionComponent],
	imports: [RouterModule],
	exports: [IntroductionComponent],
	bootstrap: [],
})
export class IntroductionModule {}
