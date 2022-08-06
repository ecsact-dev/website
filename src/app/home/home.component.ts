import {ChangeDetectionStrategy, Component} from '@angular/core';

import {detectOS} from 'detect-browser';

@Component({
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	os = detectOS(navigator.userAgent);
	latestRelease = fetch(
		'https://api.github.com/repos/seaube/ecsact-sdk/releases/latest',
	).then(res => res.json());
}
