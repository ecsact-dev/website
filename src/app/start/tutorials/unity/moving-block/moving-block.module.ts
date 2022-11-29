import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MovingBlockComponent} from './moving-block.component';
import {EcsactLangSyntaxModule} from '../../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../../../components/prism/prism.module';
import {CodeBlockVariationModule} from '../../../../../components/code-block-variation/code-block-variation.module';

@NgModule({
	declarations: [MovingBlockComponent],
	imports: [
		CommonModule,
		RouterModule,
		EcsactLangSyntaxModule,
		PrismModule,
		CodeBlockVariationModule,
	],
	exports: [MovingBlockComponent],
})
export class MovingBlockModule {}
