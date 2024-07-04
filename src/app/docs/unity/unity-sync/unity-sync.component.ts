import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';
import {EcsactLangSyntaxComponent} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {PrismComponent} from '../../../../components/prism/prism.component';
import {CodeBlockVariationOptionDirective} from '../../../../components/code-block-variation/code-block-variation-option.directive';

@Component({
	templateUrl: 'unity-sync.component.html',
	styleUrls: ['unity-sync.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		RouterModule,
		CodeBlockVariationComponent,
		CodeBlockVariationOptionDirective,
		EcsactLangSyntaxComponent,
		PrismComponent,
	],
})
export class UnitySyncComponent {}
