import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShowcaseComponent} from './showcase.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
	declarations: [ShowcaseComponent],
	imports: [CommonModule, CdkAccordionModule],
	exports: [ShowcaseComponent],
})
export class ShowcaseModule {}
