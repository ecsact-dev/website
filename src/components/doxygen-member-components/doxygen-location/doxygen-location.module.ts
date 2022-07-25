import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

import {DoxygenLocationComponent} from './doxygen-location.component';

@NgModule({
	declarations: [DoxygenLocationComponent],
	imports: [CommonModule, DoxygenContainerModule],
	exports: [DoxygenLocationComponent],
})
export class DoxygenLocationModule {}
