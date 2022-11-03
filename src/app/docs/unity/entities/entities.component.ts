import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'entities.component.html',
	styleUrls: ['entities.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntitiesComponent {}
