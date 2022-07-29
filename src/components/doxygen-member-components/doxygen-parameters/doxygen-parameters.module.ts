import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

import {DoxygenParametersComponent} from './doxygen-parameters.component';

@NgModule({
	declarations: [DoxygenParametersComponent],
	imports: [CommonModule, DoxygenContainerModule],
	exports: [DoxygenParametersComponent],
})
export class DoxygenParametersModule {}
