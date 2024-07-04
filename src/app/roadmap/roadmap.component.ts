// TODO: enable ts in this file again
// @ts-nocheck

import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {from, Observable, shareReplay, switchMap} from 'rxjs';
import {marked} from 'marked';
import {CdkAccordionItem, CdkAccordion} from '@angular/cdk/accordion';
import {NgIf, NgFor, NgTemplateOutlet, AsyncPipe} from '@angular/common';

interface IRoadmapProjectRaw {
	number: number;
	title: string | null;
	shortDescription: string;
	readme: string;
}

export enum RoadmapItemStatus {
	Planning,
	InProgress,
	Done,
}

const roadmapItemStatusParseMap = {
	['Done']: RoadmapItemStatus.Done,
	['In-Progress']: RoadmapItemStatus.InProgress,
	['Planning']: RoadmapItemStatus.Planning,
};

export interface IRoadmapProject {
	number: number;
	title: string | null;
	shortDescription: string;
	readmeHtml: string;
	status: RoadmapItemStatus;
}

function parseRoadmapStatus(item: IRoadmapProjectRaw): RoadmapItemStatus {
	if (item.readme) {
		const matches = item.readme.match(/In-Progress|Planning|Done/g);
		for (const match of matches) {
			if (roadmapItemStatusParseMap[match]) {
				return roadmapItemStatusParseMap[match];
			}
		}
	}

	return RoadmapItemStatus.Planning;
}

@Component({
	selector: 'ecsact-roadmap',
	templateUrl: './roadmap.component.html',
	styleUrls: ['./roadmap.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		CdkAccordionItem,
		NgFor,
		NgTemplateOutlet,
		CdkAccordion,
		AsyncPipe,
	],
})
export class RoadmapComponent {
	readonly RoadmapItemStatus = RoadmapItemStatus;

	readonly projects$: Observable<Array<IRoadmapProject[]> | null>;

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
								status: parseRoadmapStatus(item),
								readmeHtml: item.readme
									? marked(item.readme)
									: '<em>(no readme)</em>',
							})),
						)
						.then(items =>
							items.reduce(
								(result, item) => {
									result[item.status].push(item);
									return result;
								},
								[
									/*RoadmapItemStatus.InProgress*/ [],
									/*RoadmapItemStatus.Planning*/ [],
									/*RoadmapItemStatus.Done */ [],
								] as Array<IRoadmapProject[]>,
							),
						)
						.catch(err => (console.error(err) as any) || null),
				),
			),
		);
	}
}
