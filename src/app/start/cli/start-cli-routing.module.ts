import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartCliComponent} from './start-cli.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartCliComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartCliRoutingModule {}
