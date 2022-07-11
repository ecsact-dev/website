import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenEnumValueDefComponent} from './doxygen-enumvalue-def.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';

@NgModule({
	declarations: [DoxygenEnumValueDefComponent],
	imports: [CommonModule, DoxygenParagraphModule],
	exports: [DoxygenEnumValueDefComponent],
})
export class DoxygenEnumValueDefModule {}
