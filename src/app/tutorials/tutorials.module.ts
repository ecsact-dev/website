import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {TutorialsComponent} from './tutorials.component';

@NgModule({
	declarations: [TutorialsComponent],
	imports: [RouterModule],
	exports: [TutorialsComponent],
	bootstrap: [],
})
export class TutorialsModule {}
