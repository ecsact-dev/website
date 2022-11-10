import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenAccessModule} from '../doxygen-member-components/doxygen-access/doxygen-access.module';
import {DoxygenParametersModule} from '../doxygen-member-components/doxygen-parameters/doxygen-parameters.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenDescriptionComponent} from '../doxygen-member-components/doxygen-description/doxygen-description.component';

import {DoxygenEnumDefComponent} from './doxygen-enum-def.component';

@NgModule({
	declarations: [DoxygenEnumDefComponent],
	imports: [
		CommonModule,
		DoxygenAccessModule,
		DoxygenParametersModule,
		DoxygenLocationModule,
		DoxygenDescriptionModule,
		DoxygenDescriptionModule,
	],
	exports: [DoxygenEnumDefComponent],
})
export class DoxygenEnumDefModule {}
