import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParentBlockModule} from '../doxygen-parent-block/doxygen-parent-block.module';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenFunctionDefModule} from '../doxygen-function-def/doxygen-function-def.module';
import {DoxygenTypedefDefModule} from '../doxygen-typedef-def/doxygen-typedef-def.module';
import {DoxygenVariableDefModule} from '../doxygen-variable-def/doxygen-variable-def.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenChildBlockModule} from '../doxygen-child-block/doxygen-child-block.module';
import {RouterModule} from '@angular/router';

import {DoxygenDataTypeDefComponent} from './doxygen-datatype-def.component';
import {DoxygenRefidLinkModule} from '../doxygen-refid-link/doxygen-refid-link.module';

@NgModule({
	declarations: [DoxygenDataTypeDefComponent],
	imports: [
		CommonModule,
		DoxygenParentBlockModule,
		DoxygenChildBlockModule,
		DoxygenNameModule,
		DoxygenDescriptionModule,
		DoxygenFunctionDefModule,
		DoxygenTypedefDefModule,
		DoxygenVariableDefModule,
		DoxygenLocationModule,
		RouterModule,
		DoxygenRefidLinkModule,
	],
	exports: [DoxygenDataTypeDefComponent],
})
export class DoxygenDataTypeDefModule {}
