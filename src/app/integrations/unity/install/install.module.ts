import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UnityInstallPageComponent} from './install.component';

@NgModule({
    imports: [RouterModule, UnityInstallPageComponent],
    exports: [UnityInstallPageComponent],
    bootstrap: [],
})
export class UnityInstallPageModule {}
