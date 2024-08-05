import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ExtendCodegenComponent} from './codegen.component';
import {ExtendBuildRecipeComponent} from './build-recipe.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'codegen',
				pathMatch: 'full',
				component: ExtendCodegenComponent,
			},
			{
				path: 'build-recipe',
				pathMatch: 'full',
				component: ExtendBuildRecipeComponent,
			},
		]),
	],
	exports: [],
})
export class ExtendRoutingModule {}
