import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'system-impl.component.html',
	styleUrls: ['system-impl.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SystemImplComponent {}
