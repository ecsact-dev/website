import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovingBlockComponent} from './moving-block.component';
import {MovingBlockModule} from './moving-block.module';

const routes: Routes = [
	{
		path: '',
		component: MovingBlockComponent,
	},
];

@NgModule({
	imports: [MovingBlockModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MovingBlockRoutingModule {}
