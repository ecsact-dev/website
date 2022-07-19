import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {initializeApp} from 'firebase/app';

import {ServiceWorkerService} from './service-worker.service';

@Component({
	selector: 'ecsact-dev-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	constructor(private swService: ServiceWorkerService) {
		this.swService.launchUpdateCheckingRoutine();
	}

	onSearchFocused() {}

	onSearchBlurred() {}
}
