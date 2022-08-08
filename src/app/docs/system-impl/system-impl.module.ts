import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemImplComponent} from './system-impl.component';
import {HiddenTableRowsModule} from '../../../components/hidden-table-rows/hidden-table-rows.module';
import {EcsactLangSyntaxModule} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.module';
import {PrismModule} from '../../../components/prism/prism.module';

@NgModule({
	declarations: [SystemImplComponent],
	imports: [
		CommonModule,
		HiddenTableRowsModule,
		EcsactLangSyntaxModule,
		PrismModule,
	],
	exports: [SystemImplComponent],
})
export class SystemImplModule {}
