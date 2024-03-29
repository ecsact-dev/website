import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionParameter} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-name',
	preserveWhitespaces: true,
	templateUrl: './doxygen-name.component.html',
	styleUrls: ['./doxygen-name.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
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

	constructor() {}
}
