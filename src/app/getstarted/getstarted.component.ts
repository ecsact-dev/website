import {ChangeDetectionStrategy, Component} from '@angular/core';
import {detectOS, OperatingSystem} from 'detect-browser';

@Component({
	templateUrl: 'getstarted.component.html',
	styleUrls: ['getstarted.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetStartedComponent {
	readonly os: OperatingSystem = detectOS(navigator.userAgent);
}
