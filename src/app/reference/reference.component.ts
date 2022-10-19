import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Search} from '../../search/search.service';
@Component({
	templateUrl: 'reference.component.html',
	styleUrls: ['reference.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
	get repos() {
		return this.search.repos;
	}

	constructor(private search: Search) {}
}
