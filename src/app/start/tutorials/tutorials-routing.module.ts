import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
	{
		path: 'cpp-to-wasm',
		loadChildren: () =>
			import('./cpp-to-wasm/cpp-to-wasm-routing.module').then(
				m => m.CppToWasmRoutingModule,
			),
	},
	{
		path: 'first-ecsact-file',
		loadChildren: () =>
			import('./first-ecsact-file/first-ecsact-file-routing.module').then(
				m => m.FirstEcsactFileRoutingModule,
			),
	},
	{
		path: 'systems-in-cpp',
		loadChildren: () =>
			import('./systems-in-cpp/systems-in-cpp-routing.module').then(
				m => m.SystemsInCppRoutingModule,
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
		path: 'unity/basic-example',
		loadChildren: () =>
			import('./unity/basic-example/basic-example-routing.module').then(
				m => m.BasicExampleRoutingModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
})
export class TutorialsRoutingModule {}
