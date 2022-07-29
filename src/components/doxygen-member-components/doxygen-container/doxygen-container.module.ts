import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerComponent} from './doxygen-container.component';

@NgModule({
	declarations: [DoxygenContainerComponent],
	imports: [CommonModule],
	exports: [DoxygenContainerComponent],
})
export class DoxygenContainerModule {}
