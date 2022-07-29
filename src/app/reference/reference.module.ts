import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';

import {ReferenceComponent} from './reference.component';

@NgModule({
	declarations: [ReferenceComponent],
	imports: [
		RouterModule,
		CommonModule,
		ContentModule,
		SidenavModule,
		SidenavSectionModule,
	],
	exports: [ReferenceComponent],
	bootstrap: [],
})
export class ReferenceModule {}
