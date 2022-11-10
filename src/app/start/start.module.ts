import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';
import {BasicExampleModule} from '../tutorials/unity/basic-example/basic-example.module';
import {MovingBlockModule} from '../tutorials/unity/moving-block/moving-block.module';
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
		MovingBlockModule,
		BasicExampleModule,
	],
	exports: [StartComponent, StartOverviewComponent],
	bootstrap: [],
})
export class StartModule {}
