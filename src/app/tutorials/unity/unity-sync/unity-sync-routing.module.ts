import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnitySyncComponent} from './unity-sync.component';
import {UnitySyncModule} from './unity-sync.module';

const routes: Routes = [
	{
		path: '',
		component: UnitySyncComponent,
	},
];

@NgModule({
	imports: [UnitySyncModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UnitySyncRoutingModule {}
