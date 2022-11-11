import {
	Component,
	ChangeDetectionStrategy,
	Input,
	ChangeDetectorRef,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {from, map, Observable, switchMap} from 'rxjs';
import {DoxygenDefLocation} from '../../../search/doxygen-def-types';
import {Search} from '../../../search/search.service';

@Component({
	selector: 'doxygen-location',
	templateUrl: './doxygen-location.component.html',
	styleUrls: ['./doxygen-location.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenLocationComponent {
	@Input()
	location: DoxygenDefLocation;

	private _repo: string = '';
	@Input()
	set repo(value: string) {
		this._repo = value;
	}
	get repo() {
		return this._repo || this.route.snapshot.params.repo;
	}

	get displayFilePath() {
		let result = this.location.file;
		if (!isNaN(this.location.line)) {
			result += `:${this.location.line}:${this.location.column}`;
		}

		return result;
	}

	readonly commit$: Observable<string>;
	readonly hrefBase$: Observable<string>;

	constructor(
		private route: ActivatedRoute,
		cdr: ChangeDetectorRef,
		search: Search,
	) {
		this.commit$ = route.params.pipe(
			switchMap(() => from(search.getRepoInfo(this.repo))),
			map(info => info.commit),
		);
		this.hrefBase$ = this.commit$.pipe(
			map(
				commit => `https://github.com/ecsact-dev/${this.repo}/blob/${commit}/`,
			),
		);
		route.params.subscribe(() => cdr.markForCheck());
	}

	getHref(hrefBase: string): string {
		if (!hrefBase) return '';
		hrefBase += this.location.file;
		if (!isNaN(this.location.line)) {
			hrefBase += `#L${this.location.line}`;
		}
		return hrefBase;
	}
}
