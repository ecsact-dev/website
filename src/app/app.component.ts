import {
	ChangeDetectionStrategy,
	Component,
	Directive,
	ElementRef,
	HostListener,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import {
	NavigationStart,
	NavigationEnd,
	NavigationError,
	NavigationCancel,
	Router,
} from '@angular/router';
import {Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';
import {SearchMeta} from '../search/search-meta.service';

import {ServiceWorkerService} from './service-worker.service';

@Directive({selector: 'a[navItem]'})
export class AppNavItem {
	constructor(public element: ElementRef<HTMLAnchorElement>) {}
}

@Component({
	selector: 'ecsact-dev-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	@ViewChild('mobileMenuToggle', {static: true})
	mobileMenuToggle?: ElementRef<HTMLInputElement>;

	@ViewChildren(AppNavItem)
	navItems!: QueryList<AppNavItem>;

	routeLoading$: Observable<boolean>;

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

		this.routeLoading$ = router.events.pipe(
			filter(
				ev =>
					ev instanceof NavigationStart ||
					ev instanceof NavigationEnd ||
					ev instanceof NavigationCancel ||
					ev instanceof NavigationError,
			),
			map(ev => ev instanceof NavigationStart),
		);
	}

	@HostListener('window:keydown', ['$event'])
	onKeydown(ev: KeyboardEvent) {
		if (ev.altKey) {
			const index = parseInt(ev.key);
			if (!isNaN(index)) {
				const navItem = this.navItems.get(index);
				if (navItem) {
					ev.preventDefault();
					navItem.element.nativeElement.click();
				}
			}
		}
	}

	onSearchFocused() {}

	onSearchBlurred() {}
}
