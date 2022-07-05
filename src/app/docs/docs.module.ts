import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DocsComponent} from './docs.component';

@NgModule({
	declarations: [DocsComponent],
	imports: [RouterModule],
	exports: [DocsComponent],
	bootstrap: [],
})
export class DocsModule {}
