import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactExampleDiagramModule} from '../../components/ecsact-example-diagram/ecsact-example-diagram.module';
import {EcsactLangSyntaxModule} from '../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

import {HomeComponent} from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		RouterModule,
		CommonModule,
		EcsactLangSyntaxModule,
		EcsactExampleDiagramModule,
	],
	exports: [HomeComponent],
	bootstrap: [],
})
export class HomeModule {}
