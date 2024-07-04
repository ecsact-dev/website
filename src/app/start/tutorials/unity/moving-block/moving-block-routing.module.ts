import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovingBlockComponent} from './moving-block.component';

const routes: Routes = [
	{
		path: '',
		component: MovingBlockComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MovingBlockRoutingModule {}
