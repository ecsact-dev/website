import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LangComponent} from './lang.component';

@NgModule({
	declarations: [LangComponent],
	imports: [CommonModule],
	exports: [LangComponent],
})
export class LangModule {}
