import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EcsactLangSyntaxComponent } from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import { PrismComponent } from '../../../../components/prism/prism.component';
import { CodeBlockVariationComponent } from '../../../../components/code-block-variation/code-block-variation.component';

@Component({
	selector: 'ecsact-unity',
	templateUrl: './ecsact-unity.component.html',
	styleUrls: ['./ecsact-unity.component.scss'],
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
export class EcsactUnityComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
