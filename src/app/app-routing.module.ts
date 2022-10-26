import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// These are lazy-loaded routes - note that we dynamic-import the modules here
// to avoid having an eager dependency on them.
const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadChildren: () =>
			import('./home/home-routing.module').then(m => m.HomeRoutingModule),
	},
	{
		path: 'docs',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./docs/docs-routing.module').then(m => m.DocsRoutingModule),
	},
	{
		path: 'start',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./getstarted/getstarted-routing.module').then(
				m => m.GetStartedRoutingModule,
			),
	},
	{
		path: 'install',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./install/install-routing.module').then(
				m => m.InstallRoutingModule,
			),
	},
	{
		path: 'introduction',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./introduction/introduction-routing.module').then(
				m => m.IntroductionRoutingModule,
			),
	},
	{
		path: 'tutorials',
		pathMatch: 'prefix',
		loadChildren: () =>
			import('./tutorials/tutorials-routing.module').then(
				m => m.TutorialsRoutingModule,
			),
	},
	{
		path: 'integrations/unity/install',
		loadChildren: () =>
			import('./integrations/unity/install/install-routing.module').then(
				m => m.UnityInstallPageRoutingModule,
			),
	},
	{
		path: 'reference',
		loadChildren: () =>
			import('./reference/reference-routing.module').then(
				m => m.ReferenceRoutingModule,
			),
	},
	{
		path: 'docs/ecs',
		loadChildren: () =>
			import('./docs/ecs/ecs-routing.module').then(m => m.EcsRoutingModule),
	},
	{
		path: 'docs/setup',
		loadChildren: () =>
			import('./docs/setup/setup-routing.module').then(
				m => m.SetupRoutingModule,
			),
	},
	// {
	// 	path: '**',
	// 	redirectTo: '/',
	// },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			onSameUrlNavigation: 'ignore',
			// We handle this ourselves due to the custom offsets we need to apply
			// from the nav bar.
			anchorScrolling: 'disabled',
			urlUpdateStrategy: 'deferred',
			useHash: false,
			// This is set to disabled because scroll position is controlled by the
			// ContentComponent when a fragment exists and the AppComponent otherwise.
			scrollPositionRestoration: 'disabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
