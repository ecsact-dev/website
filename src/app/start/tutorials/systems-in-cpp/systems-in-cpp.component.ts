import {CommonModule} from '@angular/common';
import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PrismComponent} from '../../../../components/prism/prism.component';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';
import {CodeBlockVariationOptionDirective} from '../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	templateUrl: './systems-in-cpp.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		PrismComponent,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
	],
})
export class SystemsInCppComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
