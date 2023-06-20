import {ChangeDetectionStrategy, Component} from '@angular/core';
import {detectOS, OperatingSystem} from 'detect-browser';

const osOptions = [
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
	];

@Component({
	templateUrl: 'start-overview.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartOverviewComponent {
	readonly osOptions = osOptions;
	readonly currentOs: OperatingSystem;
	selectedOs: OperatingSystem;

	constructor() {
		this.currentOs = detectOS(navigator.userAgent);

		if(!osOptions.find(opt => opt.value === this.currentOs)) {
			this.currentOs = 'Windows 10';
		}

		this.selectedOs = this.currentOs;
	}
}
