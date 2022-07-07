import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	ElementRef,
	OnDestroy,
	OnInit,
	TrackByFunction,
	ViewChild,
} from '@angular/core';
import {Search} from '../../search/search.service';
import {DoxygenBase} from '../../search/doxygen-def-types';
import {Observable, Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
	templateUrl: 'reference.component.html',
	styleUrls: ['reference.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent implements OnInit, OnDestroy {
	@ViewChild('searchInput', {static: true})
	searchInput?: ElementRef<HTMLInputElement>;

	compounds: DoxygenBase[] = [];
	pendingInput: boolean = false;
	readonly compoundsTrackBy: TrackByFunction<DoxygenBase>;
	readonly searchReady$: Observable<boolean>;

	private _searchReadySubscription: Subscription;
	private _inputTimeout: number = 0;

	constructor(
		private search: Search,
		private location: Location,
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef,
	) {
		this.compoundsTrackBy = (index: number, item: DoxygenBase) => {
			return item.refid;
		};

		this.searchReady$ = this.search.ready$;
		this._searchReadySubscription = this.search.ready$.subscribe(ready => {
			this._onSearchReadyChange(ready);
		});
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
