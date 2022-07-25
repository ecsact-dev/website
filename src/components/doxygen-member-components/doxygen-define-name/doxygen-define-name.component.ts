import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionParameter} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-name',
	preserveWhitespaces: true,
	templateUrl: './doxygen-define-name.component.html',
	styleUrls: ['./doxygen-define-name.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenDefineNameComponent {
	@Input()
	name: string;

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

	@Input()
	link: string;

	@Input()
	page_id: string;

	@Input()
	headerType: 'h1' | 'h2' | 'h3';

	isVirtual() {
		return this.virtual != 'non-virtual';
	}

	combinedName() {
		let constStr = '';
		if (this.const) {
			constStr = 'const';
		}

		let staticStr = '';
		if (this.static) {
			staticStr = '';
		}

		let mutableStr = '';
		if (this.mutable) {
			mutableStr = 'mutable';
		}

		let explicitStr = '';
		if (this.explicit) {
			explicitStr = 'mutable';
		}

		let inlineStr = '';
		if (this.inline) {
			inlineStr = 'inline';
		}

		let virtualStr = '';
		if (this.virtual == 'virtual') {
			virtualStr = 'virtual';
		}

		return (
			constStr + this.access + staticStr + mutableStr + virtualStr + this.name
		);
	}

	verifyHeader() {
		if (this.headerType) {
			return this.headerType;
		} else {
			return 'h2';
		}
	}

	constructor() {}
}
