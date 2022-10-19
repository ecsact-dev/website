import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	TrackByFunction,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {
	DoxygenCompound,
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

	mainPagePromise: Promise<DoxygenPageDef>;
	compoundsPromise: Promise<DoxygenCompound[]>;
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

	constructor(search: Search, route: ActivatedRoute, cdr: ChangeDetectorRef) {
		this.compoundsPromise = new Promise<DoxygenCompound[]>(() => {});
		this.mainPagePromise = new Promise<DoxygenPageDef>(() => {});
		route.params.subscribe(params => {
			this.compoundsPromise = search.getCompounds(params.repo);
			this.mainPagePromise = search.getDef(params.repo, 'indexpage');
			cdr.markForCheck();
		});
	}
}
