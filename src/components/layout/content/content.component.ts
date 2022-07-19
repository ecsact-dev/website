import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	ChangeDetectorRef,
} from '@angular/core';

export interface ContentPageAnchor {
	id: string;
	title: string;
	childPageAnchors: ContentPageAnchor[];
}

function createPageAnchor(element: Element) {
	return {
		id: element.id,
		title: element.firstChild.textContent.trim(),
		childPageAnchors: Array.from(element.children)
			.filter(el => !!el.id)
			.map(createPageAnchor),
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

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.refreshPageAnchors();
	}

	onContentChange(changes: MutationRecord[]) {
		this.refreshPageAnchors();
	}

	refreshPageAnchors() {
		this.pageAnchors = Array.from(this.mainContent!.nativeElement.children)
			.filter(el => !!el.id)
			.map(createPageAnchor);
	}
}
