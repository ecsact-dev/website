import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenDescriptionComponent} from './doxygen-description.component';
import {DoxygenParagraphModule} from '../../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

@NgModule({
	declarations: [DoxygenDescriptionComponent],
	imports: [CommonModule, DoxygenParagraphModule, DoxygenContainerModule],
	exports: [DoxygenDescriptionComponent],
})
export class DoxygenDescriptionModule {}
