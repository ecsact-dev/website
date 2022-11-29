import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicExampleComponent} from './basic-example.component';
import {BasicExampleModule} from './basic-example.module';

const routes: Routes = [
	{
		path: '',
		component: BasicExampleComponent,
	},
];

@NgModule({
	imports: [BasicExampleModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BasicExampleRoutingModule {}
