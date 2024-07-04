import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EcsactWasmSystemImplValidatorComponent } from '../../../components/ecsact-wasm-system-impl-validator/ecsact-wasm-system-impl-validator.component';
import { PrismComponent } from '../../../components/prism/prism.component';

@Component({
	selector: 'ecsact-system-impl-wasm',
	templateUrl: './system-impl-wasm.component.html',
	styleUrls: ['./system-impl-wasm.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		CommonModule,
		EcsactWasmSystemImplValidatorComponent,
		PrismComponent,
	],
})
export class SystemImplWasmComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
