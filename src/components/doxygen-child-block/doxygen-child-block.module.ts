import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenChildBlockComponent} from './doxygen-child-block.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenBlockModule} from '../doxygen-block/doxygen-block.module';

@NgModule({
	declarations: [DoxygenChildBlockComponent],
	imports: [CommonModule, DoxygenParagraphModule, DoxygenBlockModule],
	exports: [DoxygenChildBlockComponent],
})
export class DoxygenChildBlockModule {}
