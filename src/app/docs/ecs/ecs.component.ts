import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'ecs.component.html',
	styleUrls: ['ecs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcsComponent {}
