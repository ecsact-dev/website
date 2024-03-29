import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParentBlockModule} from '../doxygen-parent-block/doxygen-parent-block.module';
import {DoxygenDescriptionModule} from '../doxygen-member-components/doxygen-description/doxygen-description.module';
import {DoxygenLocationModule} from '../doxygen-member-components/doxygen-location/doxygen-location.module';
import {DoxygenDirDefComponent} from './doxygen-dir-def.component';
import {RouterModule} from '@angular/router';
import {DoxygenRefidLinkModule} from '../doxygen-refid-link/doxygen-refid-link.module';

@NgModule({
	declarations: [DoxygenDirDefComponent],
	imports: [
		CommonModule,
		DoxygenParentBlockModule,
		DoxygenDescriptionModule,
		DoxygenLocationModule,
		RouterModule,
		DoxygenRefidLinkModule,
	],
	exports: [DoxygenDirDefComponent],
})
export class DoxygenDirDefModule {}
