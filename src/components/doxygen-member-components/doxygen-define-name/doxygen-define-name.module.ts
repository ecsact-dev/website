import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DoxygenNameModule} from '../doxygen-name/doxygen-name.module';

import {DoxygenDefineNameComponent} from './doxygen-define-name.component';

@NgModule({
	declarations: [DoxygenDefineNameComponent],
	imports: [CommonModule, RouterModule, DoxygenNameModule],
	exports: [DoxygenDefineNameComponent],
})
export class DoxygenDefineNameModule {}
