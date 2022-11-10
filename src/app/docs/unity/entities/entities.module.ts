import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EntitiesComponent} from './entities.component';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../../components/prism/prism.module';

@NgModule({
	declarations: [EntitiesComponent],
	imports: [
		RouterModule,
		CodeBlockVariationModule,
		EcsactLangSyntaxModule,
		PrismModule,
	],
	exports: [EntitiesComponent],
	bootstrap: [],
})
export class EntitiesModule {}
