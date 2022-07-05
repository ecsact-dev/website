import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ImplementationsComponent} from './implementations.component';

@NgModule({
	declarations: [ImplementationsComponent],
	imports: [RouterModule],
	exports: [ImplementationsComponent],
	bootstrap: [],
})
export class ImplementationsModule {}
