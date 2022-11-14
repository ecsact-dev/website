import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	ViewChild,
} from '@angular/core';
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
	@ViewChild('mobileMenuToggle', {static: true})
	mobileMenuToggle?: ElementRef<HTMLInputElement>;

	constructor(
		private swService: ServiceWorkerService,
		searchMeta: SearchMeta,
		router: Router,
	) {
		this.swService.launchUpdateCheckingRoutine();

		router.events.subscribe(routerEvent => {
			if (routerEvent instanceof NavigationEnd) {
				if (this.mobileMenuToggle) {
					this.mobileMenuToggle.nativeElement.checked = false;
				}
				searchMeta.useSearchablePageInfo();
				if (!location.hash) {
					window.scrollTo(0, 0);
				}
			}
		});
	}

	onSearchFocused() {}

	onSearchBlurred() {}
}
