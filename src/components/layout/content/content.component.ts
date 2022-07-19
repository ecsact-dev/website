import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
} from '@angular/core';

export interface ContentPageAnchor {
	id: string;
	title: string;
	indent: number;
}

function getElementIndent(element: Element): number {
	switch (element.nodeName.toLowerCase()) {
		case 'h1':
			return 0;
		case 'h2':
			return 1;
		case 'h3':
			return 2;
		case 'h4':
			return 3;
		case 'h5':
			return 4;
		case 'h6':
			return 5;
	}
	return 0;
}

function createPageAnchor(element: Element) {
	return {
		id: element.id,
		title: element.firstChild.textContent.trim(),
		indent: getElementIndent(element),
	};
}

/**
 * Main content of site. Only one of these should exist at a time.
 */
@Component({
	selector: 'ecsact-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentComponent implements OnInit {
	pageAnchors: ContentPageAnchor[] = [];

	@ViewChild('mainContent', {static: true})
	mainContent?: ElementRef<HTMLElement>;

	constructor() {}

	ngOnInit(): void {
		this.refreshPageAnchors();
	}

	onContentChange(changes: MutationRecord[]) {
		this.refreshPageAnchors();
	}

	refreshPageAnchors() {
		const mainEl = this.mainContent!.nativeElement;

		this.pageAnchors = Array.from(mainEl.querySelectorAll('[id]')).map(
			createPageAnchor,
		);

		const smallestIndent = this.pageAnchors.reduce((smallestIndent, item) => {
			if (item.indent < smallestIndent) {
				smallestIndent = item.indent;
			}
			return smallestIndent;
		}, 10);

		if (smallestIndent > 0) {
			this.pageAnchors.forEach(item => (item.indent -= smallestIndent));
		}
	}
}
