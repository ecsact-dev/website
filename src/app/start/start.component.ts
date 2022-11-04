import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'start.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartComponent {}
