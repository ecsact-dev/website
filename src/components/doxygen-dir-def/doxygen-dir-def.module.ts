import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenCompoundBlockModule} from '../doxygen-compound-block/doxygen-compound-block.module';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';

import {DoxygenDirDefComponent} from './doxygen-dir-def.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [DoxygenDirDefComponent],
	imports: [
		CommonModule,
		DoxygenCompoundBlockModule,
		DoxygenDescriptionModule,
		DoxygenLocationModule,
		DoxygenNameModule,
		RouterModule,
	],
	exports: [DoxygenDirDefComponent],
})
export class DoxygenDirDefModule {}
