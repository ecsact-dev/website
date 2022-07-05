import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'runtime-builder.component.html',
	styleUrls: ['runtime-builder.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Runtime_BuilderComponent {}
