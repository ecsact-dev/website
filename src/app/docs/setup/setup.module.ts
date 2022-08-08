import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PrismModule} from '../../../components/prism/prism.module';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

import {SetupComponent} from './setup.component';

@NgModule({
	declarations: [SetupComponent],
	imports: [RouterModule, PrismModule, EcsactLangSyntaxModule],
	exports: [SetupComponent],
	bootstrap: [],
})
export class SetupModule {}
