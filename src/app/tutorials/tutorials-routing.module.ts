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
					{
						path: 'unity/basic-example',
						loadChildren: () =>
							import('./unity/basic-example/basic-example-routing.module').then(
								m => m.BasicExampleRoutingModule,
							),
					},
					{
						path: 'unity/moving-block',
						loadChildren: () =>
							import('./unity/moving-block/moving-block-routing.module').then(
								m => m.MovingBlockRoutingModule,
							),
					},
					{
						path: 'unity/unity-sync',
						loadChildren: () =>
							import('./unity/unity-sync/unity-sync-routing.module').then(
								m => m.UnitySyncRoutingModule,
							),
					},
				],
			},
		]),
	],
	exports: [],
})
export class TutorialsRoutingModule {}
