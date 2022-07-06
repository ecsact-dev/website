import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Search} from '../../search/search.service';

@Component({
	templateUrl: 'reference.component.html',
	styleUrls: ['reference.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceComponent {
	constructor(private search: Search) {}
}
