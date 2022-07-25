import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerModule} from '../doxygen-container/doxygen-container.module';

import {DoxygenDefinitionComponent} from './doxygen-definition.component';

@NgModule({
	declarations: [DoxygenDefinitionComponent],
	imports: [CommonModule, DoxygenContainerModule],
	exports: [DoxygenDefinitionComponent],
})
export class DoxygenDefinitionModule {}
