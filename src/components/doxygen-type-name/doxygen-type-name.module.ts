import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenTypeNameComponent} from './doxygen-type-name.component';
import {DoxygenRefidLinkModule} from '../doxygen-refid-link/doxygen-refid-link.module';

@NgModule({
	declarations: [DoxygenTypeNameComponent],
	imports: [CommonModule, DoxygenRefidLinkModule],
	exports: [DoxygenTypeNameComponent],
})
export class DoxygenTypeNameModule {}
