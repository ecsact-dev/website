// TODO: enable ts in this file again
// @ts-nocheck

import {
	AfterViewInit,
	Directive,
	ElementRef,
	Input,
	OnDestroy,
	OnInit,
} from '@angular/core';
import {
	CodeBlockVariationComponent,
	ICodeBlockVariationOption,
} from './code-block-variation.component';

@Directive({
	selector: '[codeBlockVariationOption]',
	standalone: true,
})
export class CodeBlockVariationOptionDirective
	implements AfterViewInit, OnDestroy, ICodeBlockVariationOption
{
	private _optionTitle: string = '';
	get optionTitle(): string {
		if (!this._optionTitle) {
			return this.getDefaultOptionTitle();
		}
		return this._optionTitle;
	}
	@Input()
	set optionTitle(value: string) {
		this._optionTitle = value;
	}

	constructor(
		private hostEl: ElementRef<HTMLElement>,
		private parent: CodeBlockVariationComponent,
	) {}

	setActive(active: boolean): void {
		this.hostEl.nativeElement.classList.toggle(
			'code-block-variation-option-active',
			active,
		);
	}

	getTextContent() {
		return this.hostEl.nativeElement.textContent;
	}

	getDefaultOptionTitle() {
		const codeEl = this.hostEl.nativeElement.querySelector('code');
		let langStr = codeEl?.getAttribute('language') || '';
		return langStr;
	}

	ngAfterViewInit(): void {
		this.parent._addOption(this);
	}

	ngOnDestroy(): void {
		this.parent._removeOption(this);
	}
}
