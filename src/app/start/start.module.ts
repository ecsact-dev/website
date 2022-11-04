import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';

import {StartComponent} from './start.component';

@NgModule({
	declarations: [StartComponent],
	imports: [
		CommonModule,
		RouterModule,
		ContentModule,
		SidenavModule,
		SidenavSectionModule,
	],
	exports: [StartComponent],
	bootstrap: [],
})
export class StartModule {}
