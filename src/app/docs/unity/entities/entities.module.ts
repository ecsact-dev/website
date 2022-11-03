import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EntitiesComponent} from './entities.component';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {EcsactLangSyntaxModule} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

@NgModule({
	declarations: [EntitiesComponent],
	imports: [RouterModule, CodeBlockVariationModule, EcsactLangSyntaxModule],
	exports: [EntitiesComponent],
	bootstrap: [],
})
export class EntitiesModule {}
