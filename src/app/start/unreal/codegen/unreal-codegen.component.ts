import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PrismComponent} from '../../../../components/prism/prism.component';

@Component({
	templateUrl: './unreal-codegen.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink, PrismComponent],
})
export class UnrealCodegenComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
