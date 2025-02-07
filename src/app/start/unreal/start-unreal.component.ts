import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PrismComponent} from '../../../components/prism/prism.component';

@Component({
	templateUrl: './start-unreal.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink, PrismComponent],
})
export class StartUnrealComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
