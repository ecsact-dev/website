import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenKindComponent} from './doxygen-kind.component';
import {DoxygenParagraphModule} from '../../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

@NgModule({
	declarations: [DoxygenKindComponent],
	imports: [CommonModule, DoxygenParagraphModule, DoxygenContainerModule],
	exports: [DoxygenKindComponent],
})
export class DoxygenKindModule {}
