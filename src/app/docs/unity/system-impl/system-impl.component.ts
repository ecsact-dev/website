import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';
import {PrismComponent} from '../../../../components/prism/prism.component';
import {CodeBlockVariationOptionDirective} from '../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	templateUrl: 'system-impl.component.html',
	styleUrls: ['system-impl.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		RouterModule,
		CodeBlockVariationComponent,
		PrismComponent,
		CodeBlockVariationOptionDirective,
	],
})
export class SystemImplComponent {}
