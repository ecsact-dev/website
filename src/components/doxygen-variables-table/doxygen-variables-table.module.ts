import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenRefidLinkModule} from '../doxygen-refid-link/doxygen-refid-link.module';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenVariablesTableComponent} from './doxygen-variables-table.component';
import {DoxygenTypeNameModule} from '../doxygen-type-name/doxygen-type-name.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {HiddenTableRowsModule} from '../hidden-table-rows/hidden-table-rows.module';

@NgModule({
	declarations: [DoxygenVariablesTableComponent],
	imports: [
		CommonModule,
		DoxygenRefidLinkModule,
		DoxygenParagraphModule,
		DoxygenTypeNameModule,
		DoxygenDescriptionModule,
		HiddenTableRowsModule,
	],
	exports: [DoxygenVariablesTableComponent],
})
export class DoxygenVariablesTableModule {}
