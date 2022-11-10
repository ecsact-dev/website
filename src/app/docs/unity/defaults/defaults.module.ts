import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {DefaultsComponent} from './defaults.component';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../../components/prism/prism.module';

@NgModule({
	declarations: [DefaultsComponent],
	imports: [
		RouterModule,
		CodeBlockVariationModule,
		EcsactLangSyntaxModule,
		PrismModule,
	],
	exports: [DefaultsComponent],
	bootstrap: [],
})
export class DefaultsModule {}
