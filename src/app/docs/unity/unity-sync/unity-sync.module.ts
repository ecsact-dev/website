import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UnitySyncComponent} from './unity-sync.component';

@NgModule({
	declarations: [UnitySyncComponent],
	imports: [RouterModule],
	exports: [UnitySyncComponent],
	bootstrap: [],
})
export class UnitySyncModule {}
