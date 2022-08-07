import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core';

import {detectOS} from 'detect-browser';

@Component({
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
	os = detectOS(navigator.userAgent);
	latestRelease = fetch(
		'https://api.github.com/repos/seaube/ecsact-sdk/releases/latest',
	).then(res => res.json());

	private mediaQuery: MediaQueryList;
	private readonly onMediaQueryChange: (ev: MediaQueryListEvent) => void;

	constructor(cdr: ChangeDetectorRef) {
		this.mediaQuery = window.matchMedia('(max-width: 1024px)');
		this.onMediaQueryChange = ev => {
			cdr.detectChanges();
		};
	}

	public smallWidth() {
		return this.mediaQuery.matches;
	}

	ngOnInit() {
		this.mediaQuery.addEventListener('change', this.onMediaQueryChange);
	}

	ngOnDestroy() {
		this.mediaQuery.removeEventListener('change', this.onMediaQueryChange);
	}
}
