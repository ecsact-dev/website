import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenMemberBlockModule} from '../doxygen-member-block/doxygen-member-block.module';
import {DoxygenDefinitionModule} from '../doxygen-member-components/doxygen-definition/doxygen-definition.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';

import {DoxygenTypedefDefComponent} from './doxygen-typedef-def.component';

@NgModule({
	declarations: [DoxygenTypedefDefComponent],
	imports: [
		CommonModule,
		DoxygenMemberBlockModule,
		DoxygenDefinitionModule,
		DoxygenDescriptionModule,
		DoxygenLocationModule,
	],
	exports: [DoxygenTypedefDefComponent],
})
export class DoxygenTypedefDefModule {}
