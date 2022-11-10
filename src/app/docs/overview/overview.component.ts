import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core';

@Component({
	templateUrl: 'overview.component.html',
	styleUrls: ['overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit, OnDestroy {
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
