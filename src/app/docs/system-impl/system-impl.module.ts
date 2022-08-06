import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemImplComponent} from './system-impl.component';
import {HiddenTableRowsModule} from '../../../components/hidden-table-rows/hidden-table-rows.module';

@NgModule({
	declarations: [SystemImplComponent],
	imports: [CommonModule, HiddenTableRowsModule],
	exports: [SystemImplComponent],
})
export class SystemImplModule {}
