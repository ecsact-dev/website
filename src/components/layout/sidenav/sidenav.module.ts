import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavComponent} from './sidenav.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
	declarations: [SidenavComponent],
	imports: [CommonModule, CdkAccordionModule],
	exports: [SidenavComponent],
})
export class SidenavModule {}
