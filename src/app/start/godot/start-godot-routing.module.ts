import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartGodotComponent} from './start-godot.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: StartGodotComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StartGodotRoutingRoutingModule {}
