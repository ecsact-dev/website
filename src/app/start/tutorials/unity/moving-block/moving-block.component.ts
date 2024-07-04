import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EcsactLangSyntaxComponent} from '../../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {PrismComponent} from '../../../../../components/prism/prism.component';
import {CodeBlockVariationComponent} from '../../../../../components/code-block-variation/code-block-variation.component';
import {CodeBlockVariationOptionDirective} from '../../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	selector: 'moving-block',
	templateUrl: './moving-block.component.html',
	styleUrls: ['./moving-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		EcsactLangSyntaxComponent,
		PrismComponent,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
	],
})
export class MovingBlockComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
