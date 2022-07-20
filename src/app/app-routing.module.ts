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
		path: 'getstarted',
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
			scrollPositionRestoration: 'disabled',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
