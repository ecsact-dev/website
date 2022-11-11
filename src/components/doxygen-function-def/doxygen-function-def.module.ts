import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenFunctionDefComponent} from './doxygen-function-def.component';
import {DoxygenParagraphModule} from '../doxygen-paragraph/doxygen-paragraph.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenParametersModule} from '../doxygen-member-components/doxygen-parameters/doxygen-parameters.module';
import {DoxygenReturnModule} from '../doxygen-member-components/doxygen-return/doxygen-return.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenDefinitionModule} from '../doxygen-member-components/doxygen-definition/doxygen-definition.module';
import {DoxygenRefidLinkModule} from '../doxygen-refid-link/doxygen-refid-link.module';
import {DoxygenTypeNameModule} from '../doxygen-type-name/doxygen-type-name.module';

@NgModule({
	declarations: [DoxygenFunctionDefComponent],
	imports: [
		CommonModule,
		DoxygenTypeNameModule,
		DoxygenParagraphModule,
		DoxygenDescriptionModule,
		DoxygenParametersModule,
		DoxygenReturnModule,
		DoxygenLocationModule,
		DoxygenDefinitionModule,
		DoxygenRefidLinkModule,
	],
	exports: [DoxygenFunctionDefComponent],
})
export class DoxygenFunctionDefModule {}
