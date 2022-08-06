import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxModule} from '../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';

import {HomeComponent} from './home.component';

@NgModule({
	declarations: [HomeComponent],
	imports: [RouterModule, CommonModule, EcsactLangSyntaxModule],
	exports: [HomeComponent],
	bootstrap: [],
})
export class HomeModule {}
