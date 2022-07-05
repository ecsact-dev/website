import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {InstallComponent} from './install.component';

@NgModule({
	declarations: [InstallComponent],
	imports: [RouterModule],
	exports: [InstallComponent],
	bootstrap: [],
})
export class InstallModule {}
