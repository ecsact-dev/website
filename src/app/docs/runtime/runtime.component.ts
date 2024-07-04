import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
	templateUrl: 'runtime.component.html',
	styleUrls: ['runtime.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink],
})
export class RuntimeComponent {}
