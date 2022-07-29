import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

import {DoxygenReturnComponent} from './doxygen-return.component';

@NgModule({
	declarations: [DoxygenReturnComponent],
	imports: [CommonModule, DoxygenContainerModule],
	exports: [DoxygenReturnComponent],
})
export class DoxygenReturnModule {}
