import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionParameter} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-access',
	preserveWhitespaces: true,
	templateUrl: './doxygen-access.component.html',
	styleUrls: ['./doxygen-access.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenAccessComponent {
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

	constructor() {}
}
