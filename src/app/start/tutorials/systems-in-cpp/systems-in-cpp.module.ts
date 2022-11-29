import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemsInCppComponent} from './systems-in-cpp.component';
import {RouterModule} from '@angular/router';
import {PrismModule} from '../../../../components/prism/prism.module';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';

@NgModule({
	declarations: [SystemsInCppComponent],
	imports: [CommonModule, RouterModule, PrismModule, CodeBlockVariationModule],
	exports: [SystemsInCppComponent],
})
export class SystemsInCppModule {}
