import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenNamespaceDefComponent} from './doxygen-namespace-def.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';

@NgModule({
	declarations: [DoxygenNamespaceDefComponent],
	imports: [CommonModule, DoxygenParagraphModule],
	exports: [DoxygenNamespaceDefComponent],
})
export class DoxygenNamespaceDefModule {}
