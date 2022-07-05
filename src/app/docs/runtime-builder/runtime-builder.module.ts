import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Runtime_BuilderComponent} from './runtime-builder.component';

@NgModule({
	declarations: [Runtime_BuilderComponent],
	imports: [RouterModule],
	exports: [Runtime_BuilderComponent],
	bootstrap: [],
})
export class Runtime_BuilderModule {}
