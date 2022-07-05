import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [RouterModule],
	exports: [HomeComponent],
	bootstrap: [],
})
export class HomeModule {}
