import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenRefidLinkDirective} from './doxygen-refid-link.directive';

@NgModule({
	declarations: [DoxygenRefidLinkDirective],
	imports: [CommonModule],
	exports: [DoxygenRefidLinkDirective],
})
export class DoxygenRefidLinkModule {}
