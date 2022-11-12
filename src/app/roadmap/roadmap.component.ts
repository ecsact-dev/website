import {Component, ChangeDetectionStrategy} from '@angular/core';
import {from, Observable, shareReplay, switchMap} from 'rxjs';
import {marked} from 'marked';

interface IRoadmapProjectRaw {
	number: number;
	title: string | null;
	shortDescription: string;
	readme: string;
}

export interface IRoadmapProject {
	number: number;
	title: string | null;
	shortDescription: string;
	readmeHtml: string;
}

@Component({
	selector: 'ecsact-roadmap',
	templateUrl: './roadmap.component.html',
	styleUrls: ['./roadmap.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoadmapComponent {
	readonly projects$: Observable<IRoadmapProject[] | null>;

	constructor() {
		this.projects$ = from(
			fetch('https://us-central1-ecsact-dev.cloudfunctions.net/fetchProjects'),
		).pipe(
			shareReplay(),
			switchMap(res =>
				from(
					res
						.json()
						.then(
							result =>
								result.data.organization.projectsV2
									.nodes as IRoadmapProjectRaw[],
						)
						.then(items =>
							items.map(item => ({
								...item,
								readme: undefined,
								readmeHtml: marked(item.readme),
							})),
						)
						.catch(err => (console.error(err) as any) || null),
				),
			),
		);
	}
}
