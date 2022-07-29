import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenDefinitionModule} from '../doxygen-member-components/doxygen-definition/doxygen-definition.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';

import {DoxygenVariableDefComponent} from './doxygen-variable-def.component';

@NgModule({
	declarations: [DoxygenVariableDefComponent],
	imports: [
		CommonModule,
		DoxygenLocationModule,
		DoxygenDescriptionModule,
		DoxygenDefinitionModule,
	],
	exports: [DoxygenVariableDefComponent],
})
export class DoxygenVariableDefModule {}
