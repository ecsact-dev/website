import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsingAsyncComponent} from './using-async.component';
import {UsingAsyncModule} from './using-async.module';

const routes: Routes = [
	{
		path: '',
		component: UsingAsyncComponent,
	},
];

@NgModule({
	imports: [UsingAsyncModule, RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class UsingAsyncRoutingModule {}
