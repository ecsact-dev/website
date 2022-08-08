import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TutorialsComponent} from './tutorials.component';
import {TutorialsModule} from './tutorials.module';

@NgModule({
	imports: [
		TutorialsModule,
		RouterModule.forChild([
			{
				path: '',
				component: TutorialsComponent,
				children: [
					{
						path: 'sys-impl/emsdk-cpp',
						loadChildren: () =>
							import('./sys-impl/emsdk-cpp/emsdk-cpp-routing.module').then(
								m => m.EmsdkCppRoutingModule,
							),
					},
				],
			},
		]),
	],
	exports: [],
})
export class TutorialsRoutingModule {}
