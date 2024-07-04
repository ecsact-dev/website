import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrismComponent } from '../../../components/prism/prism.component';

@Component({
	selector: 'ecsact-cpp-system-impl-wasm',
	templateUrl: './cpp-system-impl-wasm.component.html',
	styleUrls: ['./cpp-system-impl-wasm.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, RouterModule, PrismComponent],
	standalone: true,
})
export class CppSystemImplWasmComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
