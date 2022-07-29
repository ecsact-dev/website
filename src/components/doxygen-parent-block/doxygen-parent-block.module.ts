import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParentBlockComponent} from './doxygen-parent-block.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenBlockModule} from '../doxygen-block/doxygen-block.module';

@NgModule({
	declarations: [DoxygenParentBlockComponent],
	imports: [CommonModule, DoxygenParagraphModule, DoxygenBlockModule],
	exports: [DoxygenParentBlockComponent],
})
export class DoxygenParentBlockModule {}
