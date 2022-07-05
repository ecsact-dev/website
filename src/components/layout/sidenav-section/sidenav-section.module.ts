import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidenavSectionComponent} from './sidenav-section.component';

@NgModule({
	declarations: [SidenavSectionComponent],
	imports: [CommonModule],
	exports: [SidenavSectionComponent],
})
export class SidenavSectionModule {}
