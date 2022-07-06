import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	TrackByFunction,
	ViewChild,
} from '@angular/core';
import {DoxygenBase, Search} from '../../search/search.service';

@Component({
	templateUrl: 'reference.component.html',
	styleUrls: ['reference.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
	@ViewChild('searchInput', {static: true})
	searchInput?: ElementRef<HTMLInputElement>;

	compounds: DoxygenBase[] = [];
	readonly compoundsTrackBy: TrackByFunction<DoxygenBase>;

	constructor(private search: Search) {
		this.compoundsTrackBy = (index: number, item: DoxygenBase) => {
			return item.refid;
		};
	}

	onSearchInputChange() {
		const searchValue = this.searchInput.nativeElement.value;
		this.compounds = this.search.findCompound(searchValue);
	}
}
