import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {CodeBlockVariationComponent} from '../../../components/code-block-variation/code-block-variation.component';
import {CodeBlockVariationOptionDirective} from '../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	selector: 'ecsact-start-unity',
	templateUrl: './start-unity.component.html',
	styleUrls: ['./start-unity.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
	],
	standalone: true,
})
export class StartUnityComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
