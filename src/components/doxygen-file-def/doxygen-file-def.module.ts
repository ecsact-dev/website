import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenParentBlockModule} from '../doxygen-parent-block/doxygen-parent-block.module';
import {DoxygenFunctionDefModule} from '../doxygen-function-def/doxygen-function-def.module';
import {RouterModule} from '@angular/router';
import {DoxygenNameModule} from '../doxygen-member-components/doxygen-name/doxygen-name.module';

import {DoxygenFileDefComponent} from './doxygen-file-def.component';

@NgModule({
	declarations: [DoxygenFileDefComponent],
	imports: [
		CommonModule,
		DoxygenFunctionDefModule,
		DoxygenParentBlockModule,
		DoxygenNameModule,
		RouterModule,
	],
	exports: [DoxygenFileDefComponent],
})
export class DoxygenFileDefModule {}
