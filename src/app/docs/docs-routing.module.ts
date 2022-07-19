import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DocsComponent} from './docs.component';
import {DocsModule} from './docs.module';
import {LangComponent} from './lang/lang.component';
import {LangModule} from './lang/lang.module';

const routes: Routes = [
	{
		path: '',
		component: DocsComponent,
		children: [
			{
				path: 'lang',
				pathMatch: 'full',
				component: LangComponent,
			},
		],
	},
];

@NgModule({
	imports: [DocsModule, LangModule, RouterModule.forChild(routes)],
	exports: [],
})
export class DocsRoutingModule {}
