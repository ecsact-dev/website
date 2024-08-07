import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CppSystemImplWasmComponent} from './cpp-system-impl-wasm/cpp-system-impl-wasm.component';
import {DocsComponent} from './docs.component';
import {LangComponent} from './lang/lang.component';
import {OverviewComponent} from './overview/overview.component';
import {SystemExecutionComponent} from './system-execution/system-execution.component';
import {SystemImplWasmComponent} from './system-impl-wasm/system-impl-wasm.component';
import {SystemImplComponent} from './system-impl/system-impl.component';

const routes: Routes = [
	{
		path: '',
		component: DocsComponent,
		children: [
			{
				path: '',
				component: OverviewComponent,
			},
			{
				path: 'overview',
				redirectTo: '',
			},
			{
				path: 'lang',
				component: LangComponent,
			},
			{
				path: 'system-impl',
				component: SystemImplComponent,
			},
			{
				path: 'system-impl-wasm',
				component: SystemImplWasmComponent,
			},
			{
				path: 'cpp-system-impl-wasm',
				component: CppSystemImplWasmComponent,
			},
			{
				path: 'system-execution',
				component: SystemExecutionComponent,
			},
			{
				path: 'runtime',
				loadChildren: () =>
					import('./runtime/runtime-routing.module').then(
						m => m.RuntimeRoutingModule,
					),
			},
			{
				path: 'runtime-implementations',
				loadChildren: () =>
					import('./implementations/implementations-routing.module').then(
						m => m.ImplementationsRoutingModule,
					),
			},
			{
				path: 'ecs',
				loadChildren: () =>
					import('./ecs/ecs-routing.module').then(m => m.EcsRoutingModule),
			},
			{
				path: 'unity/defaults',
				loadChildren: () =>
					import('./unity/defaults/defaults-routing.module').then(
						m => m.DefaultsRoutingModule,
					),
			},
			{
				path: 'unity/unity-sync',
				loadChildren: () =>
					import('./unity/unity-sync/unity-sync-routing.module').then(
						m => m.UnitySyncRoutingModule,
					),
			},
			{
				path: 'unity/entities',
				loadChildren: () =>
					import('./unity/entities/entities-routing.module').then(
						m => m.EntitiesRoutingModule,
					),
			},
			{
				path: 'unity/system-impl',
				loadChildren: () =>
					import('./unity/system-impl/system-impl-routing.module').then(
						m => m.SystemImplRoutingModule,
					),
			},
			{
				path: 'extend',
				loadChildren: () =>
					import('./extend/extend-routing.module').then(
						m => m.ExtendRoutingModule,
					),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
})
export class DocsRoutingModule {}
