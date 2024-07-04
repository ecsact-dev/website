import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EcsactLangSyntaxComponent } from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';

@Component({
	templateUrl: 'ecs.component.html',
	styleUrls: ['ecs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [EcsactLangSyntaxComponent],
})
export class EcsComponent { }
