import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenFunctionDefComponent} from './doxygen-function-def.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenMemberBlockModule} from '../doxygen-member-block/doxygen-member-block.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenParametersModule} from '../doxygen-member-components/doxygen-parameters/doxygen-parameters.module';
import {DoxygenReturnModule} from '../doxygen-member-components/doxygen-return/doxygen-return.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenDefinitionModule} from '../doxygen-member-components/doxygen-definition/doxygen-definition.module';

@NgModule({
	declarations: [DoxygenFunctionDefComponent],
	imports: [
		CommonModule,
		DoxygenParagraphModule,
		DoxygenMemberBlockModule,
		DoxygenDescriptionModule,
		DoxygenParametersModule,
		DoxygenReturnModule,
		DoxygenLocationModule,
		DoxygenDefinitionModule,
	],
	exports: [DoxygenFunctionDefComponent],
})
export class DoxygenFunctionDefModule {}
