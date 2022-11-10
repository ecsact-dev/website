import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DoxygenAccessComponent} from './doxygen-access.component';

@NgModule({
	declarations: [DoxygenAccessComponent],
	imports: [CommonModule, RouterModule],
	exports: [DoxygenAccessComponent],
})
export class DoxygenAccessModule {}
