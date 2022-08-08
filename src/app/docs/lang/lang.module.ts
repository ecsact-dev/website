import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

import {LangComponent} from './lang.component';

@NgModule({
	declarations: [LangComponent],
	imports: [CommonModule, RouterModule, EcsactLangSyntaxModule],
	exports: [LangComponent],
})
export class LangModule {}
