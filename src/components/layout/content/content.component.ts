import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	ChangeDetectorRef,
	TrackByFunction,
	HostListener,
	OnDestroy,
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

function getAnchorTitleText(element: Element): string {
	let title = '';
	// return element.textContent;
	for (const child of Array.from(element.childNodes)) {
		const childNodeName = child.nodeName.toLowerCase();
		if (childNodeName === 'code') {
			title += `\`${child.textContent.trim()}\` `;
		} else {
			title += child.textContent + ' ';
		}
	}

	return title.trim();
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
export class ContentComponent implements OnInit, OnDestroy {
	private _anchorEventListenerCleanupFns: (() => void)[] = [];
	private _intersectionObserver: IntersectionObserver;
	pageAnchors: ContentPageAnchor[] = [];
	activePageAnchorId: string = '';
	wantsScrollTo: string = '';

	@ViewChild('mainContent', {static: true})
	mainContent?: ElementRef<HTMLElement>;

	readonly trackBy: TrackByFunction<ContentPageAnchor>;

	constructor(private cdr: ChangeDetectorRef, route: ActivatedRoute) {
		this.trackBy = (index, item) => {
			return item.id;
		};

		route.fragment.subscribe(fragment => {
			this.wantsScrollTo = fragment;
			this.consumeScrollToIfNeeded();
		});
	}

	private onIntersect(entries: IntersectionObserverEntry[]) {
		const entry = entries[0];
		if (entry.boundingClientRect.top < 90) {
			if (entry.isIntersecting) {
				for (let i = 0; this.pageAnchors.length > i; ++i) {
					if (this.pageAnchors[i].id == entry.target.id) {
						const prevIndex = i - 1;
						if (prevIndex > 0) {
							this.activePageAnchorId = this.pageAnchors[prevIndex].id;
						} else {
							this.activePageAnchorId = entry.target.id;
						}

						this.cdr.detectChanges();
						break;
					}
				}
			} else {
				this.activePageAnchorId = entry.target.id;
				this.cdr.detectChanges();
			}
		}
	}

	ngOnInit(): void {
		this._intersectionObserver = new IntersectionObserver(
			entries => this.onIntersect(entries),
			{rootMargin: '-90px 0px 0px 0px'},
		);

		this.refreshPageAnchors();
	}

	ngOnDestroy(): void {
		this._intersectionObserver.disconnect();
	}

	onContentChange(changes: MutationRecord[]) {
		this.refreshPageAnchors();
	}

	scrollToTop() {
		window.scrollTo({top: 0, behavior: 'smooth'});
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
			if (pageAnchor.id === this.wantsScrollTo) {
				setTimeout(() => this.scrollToPageAnchor(pageAnchor), 0);
				this.wantsScrollTo = '';
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
			title: getAnchorTitleText(element),
			indent: getElementIndent(element),
			element,
		};
	}

	refreshPageAnchors() {
		for (const fn of this._anchorEventListenerCleanupFns) {
			fn();
		}
		this._anchorEventListenerCleanupFns = [];

		for (const {element} of this.pageAnchors) {
			this._intersectionObserver.unobserve(element);
		}

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

		for (const {element} of this.pageAnchors) {
			this._intersectionObserver.observe(element);
		}

		this.cdr.detectChanges();
		this.consumeScrollToIfNeeded();
	}
}
