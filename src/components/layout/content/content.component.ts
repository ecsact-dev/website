import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	ChangeDetectorRef,
	TrackByFunction,
	HostListener,
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

export interface ContentPageAnchor {
	id: string;
	title: string;
	indent: number;
	element: Element;
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
	private _anchorEventListenerCleanupFns: (() => void)[] = [];
	pageAnchors: ContentPageAnchor[] = [];
	activePageAnchorId: string = '';
	wantsScrollTo = false;

	@ViewChild('mainContent', {static: true})
	mainContent?: ElementRef<HTMLElement>;

	readonly trackBy: TrackByFunction<ContentPageAnchor>;

	constructor(private cdr: ChangeDetectorRef, route: ActivatedRoute) {
		this.trackBy = (index, item) => {
			return item.id;
		};

		route.fragment.subscribe(fragment => {
			this.activePageAnchorId = fragment;
			this.wantsScrollTo = true;
			this.consumeScrollToIfNeeded();
		});
	}

	ngOnInit(): void {
		this.refreshPageAnchors();
	}

	onContentChange(changes: MutationRecord[]) {
		this.refreshPageAnchors();
	}

	private scrollToPageAnchor(pageAnchor: ContentPageAnchor) {
		const topPadding = 8;
		const topHeight = parseInt(
			getComputedStyle(document.documentElement).getPropertyValue(
				'--top-nav-height',
			),
		);
		const y =
			pageAnchor.element.getBoundingClientRect().top +
			window.pageYOffset -
			topHeight -
			topPadding;

		window.scrollTo({top: y, behavior: 'smooth'});
	}

	private consumeScrollToIfNeeded() {
		if (!this.wantsScrollTo) return;

		for (const pageAnchor of this.pageAnchors) {
			if (pageAnchor.id === this.activePageAnchorId) {
				this.scrollToPageAnchor(pageAnchor);
				this.wantsScrollTo = false;
				break;
			}
		}
	}

	private createPageAnchor(element: Element) {
		const eventHandler = ev => {
			this.activePageAnchorId = element.id;
			this.cdr.detectChanges();
		};
		element.addEventListener('mouseover', eventHandler);
		this._anchorEventListenerCleanupFns.push(() => {
			element.removeEventListener('mouseover', eventHandler);
		});
		return {
			id: element.id,
			title: element.firstChild.textContent.trim(),
			indent: getElementIndent(element),
			element,
		};
	}

	refreshPageAnchors() {
		for (const fn of this._anchorEventListenerCleanupFns) {
			fn();
		}
		this._anchorEventListenerCleanupFns = [];

		const mainEl = this.mainContent!.nativeElement;
		this.pageAnchors = Array.from(mainEl.querySelectorAll('[id]')).map(el =>
			this.createPageAnchor(el),
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

		this.cdr.detectChanges();
		this.consumeScrollToIfNeeded();
	}
}
