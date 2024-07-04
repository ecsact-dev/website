import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	templateUrl: 'implementations.component.html',
	styleUrls: ['implementations.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink],
})
export class ImplementationsComponent { }
