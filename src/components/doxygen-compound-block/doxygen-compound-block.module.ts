import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenCompoundBlockComponent} from './doxygen-compound-block.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenBlockModule} from '../doxygen-block/doxygen-block.module';

@NgModule({
	declarations: [DoxygenCompoundBlockComponent],
	imports: [CommonModule, DoxygenParagraphModule, DoxygenBlockModule],
	exports: [DoxygenCompoundBlockComponent],
})
export class DoxygenCompoundBlockModule {}
