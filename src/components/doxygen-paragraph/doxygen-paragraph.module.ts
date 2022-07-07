import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParagraphComponent} from './doxygen-paragraph.component';

@NgModule({
	declarations: [DoxygenParagraphComponent],
	imports: [CommonModule],
	exports: [DoxygenParagraphComponent],
})
export class DoxygenParagraphModule {}
