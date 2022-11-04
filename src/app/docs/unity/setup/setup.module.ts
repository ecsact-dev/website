import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SetupComponent} from './setup.component';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../../components/prism/prism.module';

@NgModule({
	declarations: [SetupComponent],
	imports: [
		RouterModule,
		CodeBlockVariationModule,
		EcsactLangSyntaxModule,
		PrismModule,
	],
	exports: [SetupComponent],
	bootstrap: [],
})
export class SetupModule {}
