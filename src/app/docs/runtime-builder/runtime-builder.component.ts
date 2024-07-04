import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
	templateUrl: 'runtime-builder.component.html',
	styleUrls: ['runtime-builder.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink],
})
export class Runtime_BuilderComponent {}
