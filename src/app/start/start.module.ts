import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CodeBlockVariationModule } from '../../components/code-block-variation/code-block-variation.module';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';
import {PrismModule} from '../../components/prism/prism.module';
import {StartOverviewComponent} from './start-overview.component';

import {StartComponent} from './start.component';

@NgModule({
	declarations: [StartComponent, StartOverviewComponent],
	imports: [
		CommonModule,
		RouterModule,
		ContentModule,
		SidenavModule,
		SidenavSectionModule,
		FormsModule,
		PrismModule,
		CodeBlockVariationModule,
	],
	exports: [StartComponent, StartOverviewComponent],
	bootstrap: [],
})
export class StartModule {}
