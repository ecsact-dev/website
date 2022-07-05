import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UnityInstallPageComponent} from './install.component';

@NgModule({
	declarations: [UnityInstallPageComponent],
	imports: [RouterModule],
	exports: [UnityInstallPageComponent],
	bootstrap: [],
})
export class UnityInstallPageModule {}
