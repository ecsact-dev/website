import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

import {DoxygenParametersComponent} from './doxygen-parameters.component';
import {DoxygenRefidLinkModule} from '../../doxygen-refid-link/doxygen-refid-link.module';

@NgModule({
	declarations: [DoxygenParametersComponent],
	imports: [CommonModule, DoxygenContainerModule, DoxygenRefidLinkModule],
	exports: [DoxygenParametersComponent],
})
export class DoxygenParametersModule {}
