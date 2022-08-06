import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	ViewChild,
	TemplateRef,
	AfterViewInit,
	ElementRef,
	EmbeddedViewRef,
} from '@angular/core';
import {HiddenTableRowsDirective} from './hidden-table-rows.directive';

@Component({
	selector: 'tr[hiddenRow]',
	templateUrl: './hidden-table-row.component.html',
	styleUrls: ['./hidden-table-row.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HiddenTableRowComponent implements OnInit, AfterViewInit {
	constructor(
		private rowsContainer: HiddenTableRowsDirective,
		private elementRef: ElementRef<HTMLElement>,
	) {}

	ngOnInit(): void {}

	ngAfterViewInit() {
		this.rowsContainer.setupPlaceholderRow(this.elementRef);
	}
}
