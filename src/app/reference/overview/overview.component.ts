import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'ecsact-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink],
})
export class OverviewComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
