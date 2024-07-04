import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {detectOS, OperatingSystem} from 'detect-browser';
import {ContentComponent} from '../../components/layout/content/content.component';
import {SidenavComponent} from '../../components/layout/sidenav/sidenav.component';
import {SidenavSectionComponent} from '../../components/layout/sidenav-section/sidenav-section.component';
import {FormsModule} from '@angular/forms';
import {PrismComponent} from '../../components/prism/prism.component';
import {CodeBlockVariationComponent} from '../../components/code-block-variation/code-block-variation.component';

const OS_OPTIONS = [
	{
		name: 'Windows',
		value: 'Windows 10' as OperatingSystem,
	},
	{
		name: 'Linux',
		value: 'Linux' as OperatingSystem,
	},
	{
		name: 'macOS',
		value: 'Mac OS' as OperatingSystem,
	},
] as const;

function getCurrentOs(): OperatingSystem {
	var currentOs = detectOS(navigator.userAgent);

	if (!currentOs || !OS_OPTIONS.find(opt => opt.value === currentOs)) {
		return 'Windows 10';
	}

	return currentOs;
}

@Component({
	templateUrl: 'start-overview.component.html',
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
export class StartOverviewComponent {
	readonly osOptions = OS_OPTIONS;
	readonly currentOs: OperatingSystem;
	selectedOs: OperatingSystem;

	constructor() {
		this.currentOs = getCurrentOs();
		this.selectedOs = this.currentOs;
	}
}
