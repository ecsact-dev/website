import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxComponent} from '../../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {PrismComponent} from '../../../../../components/prism/prism.component';
import {CodeBlockVariationComponent} from '../../../../../components/code-block-variation/code-block-variation.component';

@Component({
	selector: 'using-async',
	templateUrl: './using-async.component.html',
	styleUrls: ['./using-async.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		EcsactLangSyntaxComponent,
		PrismComponent,
		CodeBlockVariationComponent,
	],
})
export class UsingAsyncComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
