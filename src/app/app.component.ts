import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SearchMeta} from '../search/search-meta.service';

import {ServiceWorkerService} from './service-worker.service';

@Component({
	selector: 'ecsact-dev-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	constructor(
		private swService: ServiceWorkerService,
		searchMeta: SearchMeta,
		router: Router,
	) {
		this.swService.launchUpdateCheckingRoutine();

		router.events.subscribe(routerEvent => {
			if (routerEvent instanceof NavigationEnd) {
				searchMeta.useSearchablePageInfo();
			}
		});
	}

	onSearchFocused() {}

	onSearchBlurred() {}
}
