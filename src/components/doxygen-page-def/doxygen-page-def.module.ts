import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenPageDefComponent} from './doxygen-page-def.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';

@NgModule({
	declarations: [DoxygenPageDefComponent],
	imports: [CommonModule, DoxygenParagraphModule],
	exports: [DoxygenPageDefComponent],
})
export class DoxygenPageDefModule {}
