import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenFileDefComponent} from './doxygen-file-def.component';
import {DoxygenFunctionDefModule} from '../doxygen-function-def/doxygen-function-def.module';

@NgModule({
	declarations: [DoxygenFileDefComponent],
	imports: [CommonModule, DoxygenFunctionDefModule],
	exports: [DoxygenFileDefComponent],
})
export class DoxygenFileDefModule {}
