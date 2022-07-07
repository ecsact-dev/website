import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenClassDefComponent} from './doxygen-class-def.component';

@NgModule({
	declarations: [DoxygenClassDefComponent],
	imports: [CommonModule],
	exports: [DoxygenClassDefComponent],
})
export class DoxygenClassDefModule {}
