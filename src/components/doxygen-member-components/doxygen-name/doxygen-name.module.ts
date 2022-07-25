import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {DoxygenNameComponent} from './doxygen-name.component';

@NgModule({
	declarations: [DoxygenNameComponent],
	imports: [CommonModule, RouterModule],
	exports: [DoxygenNameComponent],
})
export class DoxygenNameModule {}
