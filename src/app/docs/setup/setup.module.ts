import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SetupComponent} from './setup.component';

@NgModule({
	declarations: [SetupComponent],
	imports: [RouterModule],
	exports: [SetupComponent],
	bootstrap: [],
})
export class SetupModule {}
