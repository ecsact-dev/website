import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartCustomComponent} from './start-custom.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartCustomComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartCustomRoutingRoutingModule {}
