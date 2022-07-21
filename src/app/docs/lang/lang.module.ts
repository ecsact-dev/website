import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LangComponent} from './lang.component';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [LangComponent],
	imports: [CommonModule, EcsactLangSyntaxModule, RouterModule],
	exports: [LangComponent],
})
export class LangModule {}
