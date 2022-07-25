import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenVariableDefModule} from '../doxygen-variable-def/doxygen-variable-def.module';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenCompoundBlockModule} from '../doxygen-compound-block/doxygen-compound-block.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {RouterModule} from '@angular/router';

import {DoxygenNamespaceDefComponent} from './doxygen-namespace-def.component';

@NgModule({
	declarations: [DoxygenNamespaceDefComponent],
	imports: [
		CommonModule,
		DoxygenParagraphModule,
		DoxygenVariableDefModule,
		DoxygenNameModule,
		DoxygenCompoundBlockModule,
		DoxygenDescriptionModule,
		DoxygenLocationModule,
		RouterModule,
	],
	exports: [DoxygenNamespaceDefComponent],
})
export class DoxygenNamespaceDefModule {}
