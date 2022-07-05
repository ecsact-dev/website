import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	EventEmitter,
	HostListener,
	OnDestroy,
	OnInit,
	Output,
	TrackByFunction,
	ViewChild,
} from '@angular/core';
import {Search} from '../../search/search.service';
import {DoxygenBase} from '../../search/doxygen-def-types';
import {first, Observable, Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'ecsact-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
	@ViewChild('searchInput', {static: true})
	searchInput?: ElementRef<HTMLInputElement>;

	@ViewChild('searchResultsContainer', {static: true})
	searchResultsContainer?: ElementRef<HTMLDivElement>;

	compounds: DoxygenBase[] = [];
	pendingInput: boolean = false;
	readonly compoundsTrackBy: TrackByFunction<DoxygenBase>;
	readonly searchReady$: Observable<boolean>;
	readonly searchFocusKey = '/';

	private _searchReadySubscription: Subscription;
	private _inputTimeout: number = 0;

	constructor(
		private search: Search,
		private location: Location,
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef,
		private router: Router,
		private hostElement: ElementRef,
	) {
		this.compoundsTrackBy = (index: number, item: DoxygenBase) => {
			return item.refid;
		};

		this.searchReady$ = this.search.ready$;
		this._searchReadySubscription = this.search.ready$.subscribe(ready => {
			this._onSearchReadyChange(ready);
		});
	}

	onBlur() {
		this.cdr.markForCheck();
	}

	onFocus() {
		this.cdr.markForCheck();
	}

	isFocused(): boolean {
		let parent = document.activeElement;
		while (parent) {
			if (parent === this.hostElement.nativeElement) {
				break;
			}

			parent = parent.parentElement;
		}

		return !!parent;
	}

	@HostListener('window:keydown', ['$event'])
	onKeydown(ev: KeyboardEvent) {
		if (!this.isFocused()) return;

		if (ev.key === 'Escape') {
			(document.activeElement as any).blur();
		} else if (ev.key === 'Enter') {
			if (this.compounds[0]) {
				const refid = this.compounds[0].refid;
				this.router.navigateByUrl(`/reference/ecsact/${refid}`);
			}
		} else if (ev.key == 'ArrowDown') {
			this.focusNextSearchItem();
			ev.preventDefault();
		} else if (ev.key === 'ArrowUp') {
			this.focusPreviousSearchItem();
			ev.preventDefault();
		}
	}

	@HostListener('window:keyup', ['$event'])
	onKeyup(ev: KeyboardEvent) {
		const nodeName = (ev.target as Element).nodeName.toLowerCase();
		if (nodeName === 'body' || this.isFocused()) {
			if (ev.key === this.searchFocusKey) {
				if (this.searchInput?.nativeElement) {
					if (this.searchInput.nativeElement !== document.activeElement) {
						const value = this.searchInput.nativeElement.value;
						this.searchInput.nativeElement.focus();
						this.searchInput.nativeElement.setSelectionRange(0, value.length);
					}
				}
			}
		}
	}

	ngOnInit() {
		const initialSearchText = this.route.snapshot.queryParams.q;
		if (initialSearchText) {
			this.searchInput.nativeElement.value = initialSearchText;
			this.onSearchInputChange();
		}
	}

	ngOnDestroy() {
		this._searchReadySubscription.unsubscribe();
	}

	isWithinSearchResultsContainer(el: Element) {
		let parent = el;
		while (parent) {
			if (parent === this.searchResultsContainer.nativeElement) {
				break;
			}

			parent = parent.parentElement;
		}

		return !!parent;
	}

	focusNextSearchItem() {
		if (this.isWithinSearchResultsContainer(document.activeElement)) {
			const nextItem = document.activeElement.nextElementSibling;
			if (nextItem && nextItem instanceof HTMLAnchorElement) {
				nextItem.focus();
			}
		} else {
			const firstAnchor =
				this.searchResultsContainer.nativeElement.querySelector('a');
			if (firstAnchor) {
				firstAnchor.focus();
			}
		}
	}

	focusPreviousSearchItem() {
		if (this.isWithinSearchResultsContainer(document.activeElement)) {
			const prevItem = document.activeElement.previousElementSibling;
			if (prevItem) {
				if (prevItem instanceof HTMLAnchorElement) {
					prevItem.focus();
				}
			} else {
				this.searchInput.nativeElement.focus();
			}
		}
	}

	onSearchInputChange() {
		if (!this.searchInput?.nativeElement) return;

		this.pendingInput = true;
		const searchValue = this.searchInput.nativeElement.value;
		const query = searchValue ? `q=${searchValue}` : '';
		this.location.replaceState(window.location.pathname, query);

		clearTimeout(this._inputTimeout);
		this._inputTimeout = setTimeout(() => {
			this.compounds = this.search.findCompound(searchValue);
			this.pendingInput = false;
			this.cdr.markForCheck();
		}, 100);
	}

	private _onSearchReadyChange(ready: boolean) {
		if (ready) {
			const searchValue = this.searchInput?.nativeElement?.value;

			if (searchValue) {
				this.onSearchInputChange();
			}
		}
	}
}
