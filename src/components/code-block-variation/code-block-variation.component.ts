import { Clipboard } from '@angular/cdk/clipboard';
import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	AfterViewInit,
	ChangeDetectorRef,
	EventEmitter,
	OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

export interface ICodeBlockVariationOption {
	optionTitle: string;
	setActive(value: boolean): void;
	getTextContent(): string;
}

export type CodeBlockVariationClipboardStatus =
	| ''
	| 'Copying'
	| 'Copied'
	| 'CopyFailed';

@Component({
	selector: 'code-block-variation',
	templateUrl: './code-block-variation.component.html',
	styleUrls: ['./code-block-variation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		NgFor,
		NgSwitch,
		NgSwitchCase,
		NgSwitchDefault,
	],
})
export class CodeBlockVariationComponent
	implements OnInit, OnDestroy, AfterViewInit {
	private static globalCopyEvent = new EventEmitter<void>();
	private static globalCopyCurrent: CodeBlockVariationComponent | null = null;
	private globalCopySub?: Subscription;

	optionIndex = 0;
	options: ICodeBlockVariationOption[] = [];
	clipboardStatus: CodeBlockVariationClipboardStatus = '';

	@ViewChild('codeBlocksContainer', { static: true })
	codeBlocksContainer?: ElementRef<HTMLDivElement>;

	@ViewChild('optionSelect', { static: true })
	optionSelect?: ElementRef<HTMLSelectElement>;

	constructor(private cdr: ChangeDetectorRef, private clipboard: Clipboard) { }

	onSelectChange() {
		const value = parseInt(this.optionSelect.nativeElement.value);
		if (!isNaN(value) && this.optionIndex !== value) {
			this.options[this.optionIndex]?.setActive(false);
			this.optionIndex = value;
			this.options[this.optionIndex]?.setActive(true);
			this.clipboardStatus = '';
			this.cdr.detectChanges();
		}
	}

	copyActiveTextContent() {
		this.clipboardStatus = 'Copying';

		const activeOption = this.options[this.optionIndex];
		const activeTextContent = activeOption?.getTextContent() || '';
		const pending = this.clipboard.beginCopy(activeTextContent);

		// https://material.angular.io/cdk/clipboard/overview
		let remainingAttempts = 3;
		const attempt = () => {
			const result = pending.copy();
			if (!result && --remainingAttempts) {
				setTimeout(attempt);
			} else {
				pending.destroy();

				try {
					CodeBlockVariationComponent.globalCopyCurrent = this;
					if (result) {
						this.clipboardStatus = 'Copied';
					} else {
						this.clipboardStatus = 'CopyFailed';
					}
					this.cdr.markForCheck();
				} finally {
					CodeBlockVariationComponent.globalCopyEvent.emit();
				}
			}
		};
		attempt();
	}

	ngOnInit(): void {
		this.globalCopySub = CodeBlockVariationComponent.globalCopyEvent.subscribe(
			() => {
				if (CodeBlockVariationComponent.globalCopyCurrent === this) return;

				this.clipboardStatus = '';
				this.cdr.detectChanges();
			},
		);
	}

	ngOnDestroy(): void {
		this.globalCopySub?.unsubscribe();
		if (CodeBlockVariationComponent.globalCopyCurrent === this) {
			CodeBlockVariationComponent.globalCopyCurrent = null;
		}
	}

	ngAfterViewInit(): void {
		this.updateActiveLanguage();
	}

	onContentChange() {
		this.updateActiveLanguage();
	}

	_addOption(option: ICodeBlockVariationOption) {
		this.options.push(option);
		if (this.options.length === 1) {
			this.optionIndex = 0;
			option.setActive(true);
		}
		this.cdr.detectChanges();
	}

	_removeOption(option: ICodeBlockVariationOption) {
		for (let i = 0; this.options.length > i; ++i) {
			const existingOption = this.options[i];
			if (existingOption === option) {
				const removedIsActive = this.optionIndex === i;
				this.options.splice(i, 1);
				this.optionIndex = Math.min(this.optionIndex, this.options.length - 1);
				if (removedIsActive) {
					const newActiveOptions = this.options[this.optionIndex];
					newActiveOptions?.setActive(true);
				}
				this.cdr.detectChanges();
				break;
			}
		}
	}

	private updateActiveLanguage() {
		if (!this.codeBlocksContainer) {
			return;
		}
	}
}
