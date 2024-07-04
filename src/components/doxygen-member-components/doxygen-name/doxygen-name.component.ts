import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoxygenFunctionParameter } from '../../../search/doxygen-def-types';
import { DoxygenAccessComponent } from '../doxygen-access/doxygen-access.component';

@Component({
	selector: 'doxygen-name',
	preserveWhitespaces: true,
	templateUrl: './doxygen-name.component.html',
	styleUrls: ['./doxygen-name.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [DoxygenAccessComponent],
})
export class DoxygenNameComponent {
	@Input()
	virtual: string;

	@Input()
	access: string;

	@Input()
	mutable: boolean;

	@Input()
	static: boolean;

	@Input()
	const: boolean;

	@Input()
	explicit: boolean;

	@Input()
	inline: boolean;

	isVirtual() {
		return this.virtual != 'non-virtual';
	}

	constructor() { }
}
