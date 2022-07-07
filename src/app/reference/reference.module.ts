import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ReferenceComponent} from './reference.component';

@NgModule({
	declarations: [ReferenceComponent],
	imports: [RouterModule, CommonModule],
	exports: [ReferenceComponent],
	bootstrap: [],
})
export class ReferenceModule {}
