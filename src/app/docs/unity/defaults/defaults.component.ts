import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'defaults.component.html',
	styleUrls: ['defaults.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultsComponent {}
