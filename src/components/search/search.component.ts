// TODO: enable ts in this file again
// @ts-nocheck

import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	HostListener,
	OnInit,
	TrackByFunction,
	ViewChild,
} from '@angular/core';
import {
	isMemberWithOwner,
	Search,
	SearchResultItem,
} from '../../search/search.service';
import { Observable, Subscription } from 'rxjs';
import { Location, NgIf, NgFor, AsyncPipe } from '@angular/common';
import { ActivatedRoute, NavigationStart, Router, RouterLink } from '@angular/router';
import { searchablePageInfos } from '../../search/searchable-page-infos';

function shuffle<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

@Component({
	selector: 'ecsact-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		NgFor,
		RouterLink,
		AsyncPipe,
	],
})
export class SearchComponent implements OnInit {
	@ViewChild('searchInput', { static: true })
	searchInput?: ElementRef<HTMLInputElement>;

	@ViewChild('searchResultsContainer', { static: true })
	searchResultsContainer?: ElementRef<HTMLDivElement>;

	defaultSearchResultItems: SearchResultItem[];
	searchResultItems: SearchResultItem[] = [];
	pendingInput: boolean = false;
	showInternalItems: boolean = false;
	readonly searchItemTrackBy: TrackByFunction<SearchResultItem>;
	readonly searchReady$: Observable<boolean>;
	readonly searchFocusKey = '/';
	readonly isMemberWithOwner = isMemberWithOwner;

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
		this.defaultSearchResultItems = search.defaultSearchItems();
		shuffle(this.defaultSearchResultItems);

		this.searchResultItems = this.defaultSearchResultItems;
		this.searchItemTrackBy = (index: number, item: SearchResultItem) => {
			return item.type === 'reference'
				? item.item.refid
				: item.path + ('#' + item.fragment);
		};

		this.searchReady$ = this.search.ready$;
		this._searchReadySubscription = this.search.ready$.subscribe(ready => {
			this._onSearchReadyChange(ready);
		});

		this.router.events.subscribe(routerEv => {
			if (routerEv instanceof NavigationStart) {
				if (this.isFocused()) {
					(document.activeElement as any).blur();
				}
			}
		});
	}

	onBlur() {
		this.cdr.markForCheck();
	}

	onFocus() {
		this.search.fetchIfNeeded();
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

	@HostListener('mousedown', ['$event'])
	onHostMousedown(ev: MouseEvent) {
		if (this.isFocused()) {
			if (ev.target instanceof HTMLElement) {
				if (this.isWithinSearchResultsContainer(ev.target)) {
					let parent = ev.target;
					while (parent) {
						if (parent.nodeName.toLowerCase() === 'a') {
							parent.focus();
							break;
						}
						parent = parent.parentElement;
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

		if (searchValue) {
			clearTimeout(this._inputTimeout);
			this._inputTimeout = setTimeout(() => {
				this.searchResultItems = this.search.search(searchValue);
				this.pendingInput = false;
				this.showInternalItems = false;
				this.cdr.markForCheck();
			}, 100);
		} else {
			this.searchResultItems = this.defaultSearchResultItems;
		}
	}

	setShowInternalItems() {
		this.showInternalItems = true;
		this.cdr.markForCheck();
	}

	countInternalItems(items: SearchResultItem[]) {
		return items.filter(item => item.type === 'reference' && item.item.internal)
			.length;
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
