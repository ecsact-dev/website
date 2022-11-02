import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DefaultsComponent} from './defaults.component';

@NgModule({
	declarations: [DefaultsComponent],
	imports: [RouterModule],
	exports: [DefaultsComponent],
	bootstrap: [],
})
export class DefaultsModule {}
