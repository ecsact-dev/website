import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DoxygenNameComponent} from './doxygen-name.component';

import {DoxygenAccessModule} from '../doxygen-access/doxygen-access.module';

@NgModule({
	declarations: [DoxygenNameComponent],
	imports: [CommonModule, RouterModule, DoxygenAccessModule],
	exports: [DoxygenNameComponent],
})
export class DoxygenNameModule {}
