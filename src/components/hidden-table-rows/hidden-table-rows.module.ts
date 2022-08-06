import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HiddenTableRowsDirective} from './hidden-table-rows.directive';
import {HiddenTableRowComponent} from './hidden-table-row.component';

@NgModule({
	declarations: [HiddenTableRowsDirective, HiddenTableRowComponent],
	imports: [CommonModule],
	exports: [HiddenTableRowsDirective, HiddenTableRowComponent],
})
export class HiddenTableRowsModule {}
