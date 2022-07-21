import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenMemberBlockComponent} from './doxygen-member-block.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenBlockModule} from '../doxygen-block/doxygen-block.module';

@NgModule({
	declarations: [DoxygenMemberBlockComponent],
	imports: [CommonModule, DoxygenParagraphModule, DoxygenBlockModule],
	exports: [DoxygenMemberBlockComponent],
})
export class DoxygenMemberBlockModule {}
