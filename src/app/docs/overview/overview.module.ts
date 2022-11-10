import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactExampleDiagramModule} from '../../../components/ecsact-example-diagram/ecsact-example-diagram.module';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {ShowcaseModule} from '../../../components/layout/showcase/showcase.module';

import {OverviewComponent} from './overview.component';

@NgModule({
	declarations: [OverviewComponent],
	imports: [
		RouterModule,
		ShowcaseModule,
		EcsactExampleDiagramModule,
		EcsactLangSyntaxModule,
	],
	exports: [OverviewComponent],
	bootstrap: [],
})
export class OverviewModule {}
