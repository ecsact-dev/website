import {ChangeDetectionStrategy, Component} from '@angular/core';
import {detectOS, OperatingSystem} from 'detect-browser';

@Component({
	templateUrl: 'start.component.html',
	styleUrls: ['start.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartComponent {
	readonly os: OperatingSystem = detectOS(navigator.userAgent);
}
