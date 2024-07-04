import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	ViewChild,
	AfterViewInit,
	ElementRef,
} from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
	selector: 'ecsact-example-diagram',
	templateUrl: './ecsact-example-diagram.component.html',
	styleUrls: ['./ecsact-example-diagram.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgIf, NgTemplateOutlet],
})
export class EcsactExampleDiagramComponent implements OnInit, AfterViewInit {
	@ViewChild('verticalLayoutEl', { static: false })
	verticalLayoutEl?: ElementRef<SVGSVGElement>;

	private _verticalLayout: boolean = false;
	public get verticalLayout(): boolean {
		return this._verticalLayout;
	}
	@Input()
	public set verticalLayout(value: boolean) {
		this._verticalLayout = value;
		if (this._verticalLayout) {
			this._updateVerticalLayoutViewBox();
		}
	}

	constructor() { }

	ngOnInit(): void { }

	ngAfterViewInit(): void {
		this._updateVerticalLayoutViewBox();
	}

	private _updateVerticalLayoutViewBox() {
		if (!this.verticalLayoutEl) return;

		const svg = this.verticalLayoutEl.nativeElement;

		const capHeightStr = window
			.getComputedStyle(svg)
			.getPropertyValue('--diagram-cap-height');

		if (capHeightStr.indexOf('px') === -1) {
			console.error(
				'--diagram-cap-height unit must be px. Instead got:',
				capHeightStr,
			);
			return;
		}

		const defaultCapHeight = 220;
		const viewBoxOriginalHeight = 531.2939632545932;
		const viewBoxOriginalWidth = 271.0288713910761;

		const capHeight = parseInt(capHeightStr);

		const viewBoxHeight =
			viewBoxOriginalHeight - defaultCapHeight * 2 + capHeight * 2;

		const viewBoxY = (defaultCapHeight - capHeight) * 0.69;

		svg.setAttribute(
			'viewBox',
			`0 ${viewBoxY} ${viewBoxOriginalWidth} ${viewBoxHeight}`,
		);
	}
}
