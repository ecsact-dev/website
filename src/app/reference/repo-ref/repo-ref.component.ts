// TODO: enable ts in this file again
// @ts-nocheck

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
import {DoxygenEnumValueDefComponent} from '../../../components/doxygen-enumvalue-def/doxygen-enumvalue-def.component';
import {DoxygenNamespaceDefComponent} from '../../../components/doxygen-namespace-def/doxygen-namespace-def.component';
import {DoxygenVariableDefComponent} from '../../../components/doxygen-variable-def/doxygen-variable-def.component';
import {DoxygenTypedefDefComponent} from '../../../components/doxygen-typedef-def/doxygen-typedef-def.component';
import {DoxygenFileDefComponent} from '../../../components/doxygen-file-def/doxygen-file-def.component';
import {DoxygenFunctionDefComponent} from '../../../components/doxygen-function-def/doxygen-function-def.component';
import {DoxygenEnumDefComponent} from '../../../components/doxygen-enum-def/doxygen-enum-def.component';
import {DoxygenDirDefComponent} from '../../../components/doxygen-dir-def/doxygen-dir-def.component';
import {DoxygenDefineDefComponent} from '../../../components/doxygen-define-def/doxygen-define-def.component';
import {DoxygenNameComponent} from '../../../components/doxygen-member-components/doxygen-name/doxygen-name.component';
import {DoxygenParentBlockComponent} from '../../../components/doxygen-parent-block/doxygen-parent-block.component';
import {DoxygenDataTypeDefComponent} from '../../../components/doxygen-datatype-def/doxygen-datatype-def.component';
import {NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
	selector: 'ecsact-repo-ref',
	templateUrl: './repo-ref.component.html',
	styleUrls: ['./repo-ref.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgIf,
		NgSwitch,
		NgSwitchCase,
		DoxygenDataTypeDefComponent,
		DoxygenParentBlockComponent,
		DoxygenNameComponent,
		DoxygenDefineDefComponent,
		DoxygenDirDefComponent,
		DoxygenEnumDefComponent,
		DoxygenFunctionDefComponent,
		DoxygenFileDefComponent,
		DoxygenTypedefDefComponent,
		DoxygenVariableDefComponent,
		DoxygenNamespaceDefComponent,
		DoxygenEnumValueDefComponent,
		NgSwitchDefault,
	],
})
export class RepoRefComponent implements OnInit {
	def?: DoxygenCompoundDef | DoxygenMemberDef;
	loading = false;

	constructor(
		private search: Search,
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef,
	) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(async paramMap => {
			const repo = paramMap.get('repo');
			const refid = paramMap.get('refid');

			this.loading = true;
			try {
				this.def = await this.search.getDef(repo, refid);
			} finally {
				this.loading = false;
				this.cdr.markForCheck();
			}
		});
	}
}
