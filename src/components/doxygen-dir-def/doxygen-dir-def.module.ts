import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParentBlockModule} from '../doxygen-parent-block/doxygen-parent-block.module';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';

import {DoxygenDirDefComponent} from './doxygen-dir-def.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [DoxygenDirDefComponent],
	imports: [
		CommonModule,
		DoxygenParentBlockModule,
		DoxygenDescriptionModule,
		DoxygenLocationModule,
		DoxygenNameModule,
		RouterModule,
	],
	exports: [DoxygenDirDefComponent],
})
export class DoxygenDirDefModule {}
