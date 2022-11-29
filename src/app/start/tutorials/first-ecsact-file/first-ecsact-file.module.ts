import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstEcsactFileComponent} from './first-ecsact-file.component';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [FirstEcsactFileComponent],
	imports: [
		CommonModule,
		RouterModule,
		CodeBlockVariationModule,
		EcsactLangSyntaxModule,
	],
	exports: [FirstEcsactFileComponent],
})
export class FirstEcsactFileModule {}
