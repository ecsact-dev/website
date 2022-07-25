import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenParametersModule} from '../doxygen-member-components/doxygen-parameters/doxygen-parameters.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenMemberBlockModule} from '../doxygen-member-block/doxygen-member-block.module';
import {DoxygenDescriptionComponent} from '../doxygen-member-components/doxygen-description/doxygen-description.component';

import {DoxygenEnumDefComponent} from './doxygen-enum-def.component';

@NgModule({
	declarations: [DoxygenEnumDefComponent],
	imports: [
		CommonModule,
		DoxygenNameModule,
		DoxygenParametersModule,
		DoxygenLocationModule,
		DoxygenDescriptionModule,
		DoxygenMemberBlockModule,
		DoxygenDescriptionModule,
	],
	exports: [DoxygenEnumDefComponent],
})
export class DoxygenEnumDefModule {}
