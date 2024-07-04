import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContentModule } from '../../components/layout/content/content.module';
import { StartOverviewComponent } from './start-overview.component';

import { StartComponent } from './start.component';
import { SidenavComponent } from '../../components/layout/sidenav/sidenav.component';
import { SidenavSectionComponent } from '../../components/layout/sidenav-section/sidenav-section.component';
import { PrismComponent } from '../../components/prism/prism.component';
import { CodeBlockVariationComponent } from '../../components/code-block-variation/code-block-variation.component';

@NgModule({
	declarations: [StartComponent, StartOverviewComponent],
	imports: [
		CommonModule,
		RouterModule,
		ContentModule,
		SidenavComponent,
		SidenavSectionComponent,
		FormsModule,
		PrismComponent,
		CodeBlockVariationComponent,
	],
	exports: [StartComponent, StartOverviewComponent],
	bootstrap: [],
})
export class StartModule { }
