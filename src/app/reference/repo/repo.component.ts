import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	TrackByFunction,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {from, map, Observable, shareReplay, switchMap} from 'rxjs';
import {
	DoxygenCompound,
	DoxygenMember,
	DoxygenPageDef,
} from '../../../search/doxygen-def-types';
import {Search} from '../../../search/search.service';

export enum RepoCompoundsView {
	ByKind,
	List,
}

@Component({
	selector: 'ecsact-repo',
	templateUrl: './repo.component.html',
	styleUrls: ['./repo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoComponent {
	readonly RepoCompoundsView = RepoCompoundsView;

	readonly byKindBlocks = [
		{
			title: 'Types',
			kinds: ['class', 'struct', 'enum', 'union'],
		},
		{
			title: 'Functions',
			kinds: ['function'],
		},
		{
			title: 'Namespaces',
			kinds: ['namespace'],
		},
		{
			title: 'Files',
			kinds: ['file', 'dir'],
		},
		{
			title: 'Examples',
			kinds: ['example'],
		},
	];

	readonly mainPage$: Observable<DoxygenPageDef>;
	readonly types$: Observable<DoxygenCompound[]>;
	readonly dirs$: Observable<DoxygenCompound[]>;
	readonly funcs$: Observable<DoxygenMember[]>;

	view = RepoCompoundsView.ByKind;
	showInternals = false;

	readonly filterInternal = (compounds: DoxygenCompound[]) => {
		return compounds.filter(compound => !compound.internal);
	};

	readonly sortByName = (compounds: DoxygenCompound[]) => {
		return compounds.sort((a, b) => a.name.localeCompare(b.name));
	};

	readonly filterByKind = (compounds: DoxygenCompound[], kinds: string[]) => {
		return compounds.filter(c => kinds.indexOf(c.kind) !== -1);
	};

	readonly trackyByRefid: TrackByFunction<DoxygenCompound> = (
		index: number,
		compound: DoxygenCompound,
	) => {
		return compound.refid;
	};

	constructor(search: Search, route: ActivatedRoute) {
		this.mainPage$ = route.params.pipe(
			switchMap(params => from(search.getDef(params.repo, 'indexpage'))),
		);

		const compounds$ = route.params.pipe(
			switchMap(params => from(search.getCompounds(params.repo))),
			shareReplay(),
		);

		this.types$ = compounds$.pipe(
			map(compounds =>
				compounds.filter(c =>
					['class', 'struct', 'enum', 'union'].includes(c.kind),
				),
			),
		);

		this.dirs$ = compounds$.pipe(
			map(compounds => compounds.filter(c => c.kind === 'dir')),
		);

		this.funcs$ = compounds$.pipe(
			map(compounds =>
				compounds
					.filter(c => c.kind === 'file')
					.reduce(
						(members, c) => [
							...members,
							...c.members.filter(m => m.kind === 'function'),
						],
						[] as DoxygenMember[],
					),
			),
		);
	}
}
