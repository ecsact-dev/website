import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../../components/prism/prism.module';

import {UnitySyncComponent} from './unity-sync.component';

@NgModule({
	declarations: [UnitySyncComponent],
	imports: [
		RouterModule,
		CodeBlockVariationModule,
		EcsactLangSyntaxModule,
		PrismModule,
	],
	exports: [UnitySyncComponent],
	bootstrap: [],
})
export class UnitySyncModule {}
