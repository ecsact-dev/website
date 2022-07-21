import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenDescriptionComponent} from './doxygen-description.component';
import {DoxygenParagraphModule} from '../../doxygen-paragraph/doxygen-paragraph.module';

@NgModule({
	declarations: [DoxygenDescriptionComponent],
	imports: [CommonModule, DoxygenParagraphModule],
	exports: [DoxygenDescriptionComponent],
})
export class DoxygenDescriptionModule {}
