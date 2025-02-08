import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PrismComponent} from '../../../../components/prism/prism.component';

@Component({
	templateUrl: './unreal-subsystems.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink, PrismComponent],
})
export class UnrealSubsystemsComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
