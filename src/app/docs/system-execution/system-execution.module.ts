import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemExecutionComponent} from './system-execution.component';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {ExecLaneVisModule} from '../../../components/exec-lane-vis/exec-lane-vis.module';
import {CodeBlockVariationModule} from '../../../components/code-block-variation/code-block-variation.module';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [SystemExecutionComponent],
	imports: [
		CommonModule,
		EcsactLangSyntaxModule,
		ExecLaneVisModule,
		CodeBlockVariationModule,
		RouterModule,
	],
	exports: [SystemExecutionComponent],
})
export class SystemExecutionModule {}
