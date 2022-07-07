import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenFunctionDefComponent} from './doxygen-function-def.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';

@NgModule({
	declarations: [DoxygenFunctionDefComponent],
	imports: [CommonModule, DoxygenParagraphModule],
	exports: [DoxygenFunctionDefComponent],
})
export class DoxygenFunctionDefModule {}
