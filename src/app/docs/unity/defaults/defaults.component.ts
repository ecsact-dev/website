import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationComponent} from '../../../../components/code-block-variation/code-block-variation.component';
import {EcsactLangSyntaxComponent} from '../../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import {PrismComponent} from '../../../../components/prism/prism.component';

@Component({
	templateUrl: 'defaults.component.html',
	styleUrls: ['defaults.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		RouterModule,
		CodeBlockVariationComponent,
		EcsactLangSyntaxComponent,
		PrismComponent,
	],
})
export class DefaultsComponent {}
