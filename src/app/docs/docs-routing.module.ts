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
				component: LangComponent,
			},
			{
				path: 'runtime',
				loadChildren: () =>
					import('./runtime/runtime-routing.module').then(
						m => m.RuntimeRoutingModule,
					),
			},
			{
				path: 'runtime-builder',
				loadChildren: () =>
					import('./runtime-builder/runtime-builder-routing.module').then(
						m => m.Runtime_BuilderRoutingModule,
					),
			},
			{
				path: 'runtime-implementations',
				loadChildren: () =>
					import('./implementations/implementations-routing.module').then(
						m => m.ImplementationsRoutingModule,
					),
			},
		],
	},
];

@NgModule({
	imports: [DocsModule, LangModule, RouterModule.forChild(routes)],
	exports: [],
})
export class DocsRoutingModule {}
