import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenCompoundBlockModule} from '../doxygen-compound-block/doxygen-compound-block.module';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenFunctionDefModule} from '../doxygen-function-def/doxygen-function-def.module';
import {DoxygenTypedefDefModule} from '../doxygen-typedef-def/doxygen-typedef-def.module';
import {DoxygenVariableDefModule} from '../doxygen-variable-def/doxygen-variable-def.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';

import {DoxygenDataTypeDefComponent} from './doxygen-datatype-def.component';

@NgModule({
	declarations: [DoxygenDataTypeDefComponent],
	imports: [
		CommonModule,
		DoxygenCompoundBlockModule,
		DoxygenNameModule,
		DoxygenDescriptionModule,
		DoxygenFunctionDefModule,
		DoxygenTypedefDefModule,
		DoxygenVariableDefModule,
		DoxygenLocationModule,
	],
	exports: [DoxygenDataTypeDefComponent],
})
export class DoxygenDataTypeDefModule {}
