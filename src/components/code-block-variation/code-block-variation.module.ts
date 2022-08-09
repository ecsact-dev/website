import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {CodeBlockVariationComponent} from './code-block-variation.component';
import {CodeBlockVariationOptionDirective} from './code-block-variation-option.directive';

@NgModule({
	declarations: [
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
	],
	imports: [CommonModule, ClipboardModule],
	exports: [CodeBlockVariationComponent, CodeBlockVariationOptionDirective],
})
export class CodeBlockVariationModule {}
