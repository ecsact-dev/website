import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

import {EcsComponent} from './ecs.component';

@NgModule({
	declarations: [EcsComponent],
	imports: [RouterModule, EcsactLangSyntaxModule],
	exports: [EcsComponent],
	bootstrap: [],
})
export class EcsModule {}
