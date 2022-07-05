import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ChangeDetectorRef,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Search} from '../../../search/search.service';
import {
	DoxygenCompoundDef,
	DoxygenMemberDef,
} from '../../../search/doxygen-def-types';

@Component({
	selector: 'ecsact-repo-ref',
	templateUrl: './repo-ref.component.html',
	styleUrls: ['./repo-ref.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoRefComponent implements OnInit {
	def?: DoxygenCompoundDef | DoxygenMemberDef;

	constructor(
		private search: Search,
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(async paramMap => {
			const repo = paramMap.get('repo');
			const refid = paramMap.get('refid');

			this.def = await this.search.getDef(repo, refid);
			this.cdr.markForCheck();
		});
	}
}
