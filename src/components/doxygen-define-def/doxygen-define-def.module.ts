import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenMemberBlockModule} from '../doxygen-member-block/doxygen-member-block.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';

import {DoxygenDefineDefComponent} from './doxygen-define-def.component';

@NgModule({
	declarations: [DoxygenDefineDefComponent],
	imports: [
		CommonModule,
		DoxygenLocationModule,
		DoxygenMemberBlockModule,
		DoxygenDescriptionModule,
	],
	exports: [DoxygenDefineDefComponent],
})
export class DoxygenDefineDefModule {}
