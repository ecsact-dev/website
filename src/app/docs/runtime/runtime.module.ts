import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RuntimeComponent} from './runtime.component';

@NgModule({
	declarations: [RuntimeComponent],
	imports: [RouterModule],
	exports: [RuntimeComponent],
	bootstrap: [],
})
export class RuntimeModule {}
