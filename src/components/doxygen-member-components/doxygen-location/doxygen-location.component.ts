import {
	Component,
	ChangeDetectionStrategy,
	Input,
	ChangeDetectorRef,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DoxygenDefLocation} from '../../../search/doxygen-def-types';

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

	get href(): string {
		// TODO(zaucy): Use commit from `repo.json`
		const commit = `main`;
		let href = `https://github.com/ecsact-dev/${this.repo}/blob/${commit}/`;
		href += this.location.file;
		if (!isNaN(this.location.line)) {
			href += `#L${this.location.line}`;
		}
		return href;
	}

	get displayFilePath() {
		let result = this.location.file;
		if (!isNaN(this.location.line)) {
			result += `:${this.location.line}:${this.location.column}`;
		}

		return result;
	}

	constructor(private route: ActivatedRoute, cdr: ChangeDetectorRef) {
		route.params.subscribe(() => cdr.markForCheck());
	}
}
