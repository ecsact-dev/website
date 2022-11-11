import {Component, ChangeDetectionStrategy} from '@angular/core';
import {BehaviorSubject, from, Observable} from 'rxjs';

export interface IRoadmapProject {
	id: number;
	title: string | null;
	shortDescription: string;
	readme: string;
}

@Component({
	selector: 'ecsact-roadmap',
	templateUrl: './roadmap.component.html',
	styleUrls: ['./roadmap.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapComponent {
	readonly projects$: Observable<IRoadmapProject[]>;

	constructor() {
		// TODO(zaucy): Fetch from GitHub
		this.projects$ = new BehaviorSubject([
			{
				id: 4,
				title: 'Async API',
				shortDescription: 'TODO: Fetch description from GitHub',
				readme: '',
			},
		]);
	}
}
