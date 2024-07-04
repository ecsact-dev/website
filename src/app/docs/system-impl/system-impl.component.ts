import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {HiddenTableRowsDirective} from '../../../components/hidden-table-rows/hidden-table-rows.directive';
import {EcsactLangSyntaxComponent} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {PrismComponent} from '../../../components/prism/prism.component';

@Component({
	selector: 'ecsact-system-impl',
	templateUrl: './system-impl.component.html',
	styleUrls: ['./system-impl.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		HiddenTableRowsDirective,
		EcsactLangSyntaxComponent,
		PrismComponent,
	],
})
export class SystemImplComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
