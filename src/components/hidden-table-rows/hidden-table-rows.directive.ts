import {
	OnInit,
	Directive,
	ElementRef,
	AfterViewInit,
	HostBinding,
	ChangeDetectorRef,
} from '@angular/core';

@Directive({selector: 'table[hasHiddenRows]'})
export class HiddenTableRowsDirective implements OnInit, AfterViewInit {
	@HostBinding('class.showing-hidden-rows')
	public showHiddenRows: boolean = false;

	private _placeholderRow: HTMLTableRowElement | null = null;

	constructor(
		private cdr: ChangeDetectorRef,
		private elementRef: ElementRef<HTMLTableElement>,
	) {}

	ngOnInit(): void {}

	ngAfterViewInit() {}

	setupPlaceholderRow(childRow: ElementRef<HTMLElement>) {
		if (!this._placeholderRow) {
			this.createPlaceholderRow(childRow);
		}

		this.elementRef.nativeElement.appendChild(this._placeholderRow);
	}

	private createPlaceholderRow(childRow: ElementRef<HTMLElement>) {
		this._placeholderRow = document.createElement('tr');
		this._placeholderRow.classList.add('toggle-hidden-rows-row');
		for (const child of Array.from(childRow.nativeElement.children)) {
			if (child.nodeName.toLowerCase() === 'td') {
				this._placeholderRow.appendChild(document.createElement('td'));
			}
		}
		const btnContainer = document.createElement('div');
		btnContainer.classList.add('hidden-btn-container');
		const btn = document.createElement('button');
		btn.addEventListener('click', ev => this.onToggleClick(ev));
		btnContainer.appendChild(btn);
		this._placeholderRow.firstChild.appendChild(btnContainer);
	}

	private onToggleClick(ev: MouseEvent) {
		this.showHiddenRows = !this.showHiddenRows;
		this.cdr.detectChanges();
	}
}
