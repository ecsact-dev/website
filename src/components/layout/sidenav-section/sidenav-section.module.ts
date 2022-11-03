import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {SidenavSectionComponent} from './sidenav-section.component';

@NgModule({
	declarations: [SidenavSectionComponent],
	imports: [CommonModule, CdkAccordionModule],
	exports: [SidenavSectionComponent],
})
export class SidenavSectionModule {}
