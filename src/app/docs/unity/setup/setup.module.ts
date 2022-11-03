import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {SetupComponent} from './setup.component';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

@NgModule({
	declarations: [SetupComponent],
	imports: [RouterModule, CodeBlockVariationModule, EcsactLangSyntaxModule],
	exports: [SetupComponent],
	bootstrap: [],
})
export class SetupModule {}
