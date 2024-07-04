import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentComponent} from '../../components/layout/content/content.component';
import {SidenavComponent} from '../../components/layout/sidenav/sidenav.component';
import {SidenavSectionComponent} from '../../components/layout/sidenav-section/sidenav-section.component';
import {FormsModule} from '@angular/forms';
import {PrismComponent} from '../../components/prism/prism.component';
import {CodeBlockVariationComponent} from '../../components/code-block-variation/code-block-variation.component';

@Component({
	templateUrl: 'start.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		ContentComponent,
		SidenavComponent,
		SidenavSectionComponent,
		FormsModule,
		PrismComponent,
		CodeBlockVariationComponent,
	],
})
export class StartComponent {}
