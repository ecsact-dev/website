import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasicExampleComponent} from './basic-example.component';
import {EcsactLangSyntaxModule} from '../../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../../../components/prism/prism.module';
import {CodeBlockVariationModule} from '../../../../../components/code-block-variation/code-block-variation.module';

@NgModule({
	declarations: [BasicExampleComponent],
	imports: [
		CommonModule,
		RouterModule,
		EcsactLangSyntaxModule,
		PrismModule,
		CodeBlockVariationModule,
	],
	exports: [BasicExampleComponent],
})
export class BasicExampleModule {}
