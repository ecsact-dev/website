import {ChangeDetectionStrategy, Component} from '@angular/core';
import {detectOS, OperatingSystem} from 'detect-browser';

@Component({
	templateUrl: 'start-overview.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartOverviewComponent {
	readonly os: OperatingSystem = detectOS(navigator.userAgent);
}
