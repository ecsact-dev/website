import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'runtime.component.html',
	styleUrls: ['runtime.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RuntimeComponent {}
