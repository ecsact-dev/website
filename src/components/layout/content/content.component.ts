// TODO: enable ts in this file again
// @ts-nocheck

import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	ChangeDetectorRef,
	TrackByFunction,
	OnDestroy,
} from '@angular/core';
import {ActivatedRoute, RouterLink, UrlSegment} from '@angular/router';
import {NgIf, NgFor, AsyncPipe} from '@angular/common';
import {CdkObserveContent} from '@angular/cdk/observers';
import {Observable} from 'rxjs';

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
	standalone: true,
	imports: [CdkObserveContent, NgIf, RouterLink, NgFor, AsyncPipe],
})
export class ContentComponent implements OnInit, OnDestroy {
	private anchorCheckInterval: any;
	pageAnchors: ContentPageAnchor[] = [];
	activePageAnchorIds: string[] = [];
	wantsScrollTo: string = '';

	@ViewChild('mainContent', {static: true})
	mainContent?: ElementRef<HTMLElement>;

	readonly currentUrl$: Observable<UrlSegment[]>;
	readonly trackBy: TrackByFunction<ContentPageAnchor>;
	readonly canShare = (window as any).navigator.canShare
		? (window as any).navigator.canShare({url: window.location.href})
		: false;
	sharing = false;

	constructor(
		private cdr: ChangeDetectorRef,
		route: ActivatedRoute,
	) {
		this.currentUrl$ = route.url;
		this.trackBy = (index, item) => {
			return item.id;
		};

		route.fragment.subscribe(fragment => {
			this.wantsScrollTo = fragment;
			this.consumeScrollToIfNeeded();
		});
	}

	async share() {
		if (!this.canShare) {
			return;
		}
		this.sharing = true;
		this.cdr.markForCheck();
		try {
			await navigator.share({url: window.location.href});
		} finally {
			this.sharing = false;
			this.cdr.markForCheck();
		}
	}

	checkActivePageAnchors() {
		let newActiveAnchorIds: [string, number][] = [];
		for (const anchor of this.pageAnchors) {
			const rect = anchor.element.getBoundingClientRect();
			if (rect.top > -50 && rect.top < 90) {
				newActiveAnchorIds.push([anchor.id, rect.top]);
			}
		}

		if (newActiveAnchorIds.length > 0) {
			if (newActiveAnchorIds.length > 1) {
				newActiveAnchorIds = newActiveAnchorIds.filter(
					([_, top]) => Math.abs(top) < 50,
				);
			}

			this.activePageAnchorIds = newActiveAnchorIds.map(([id]) => id);
			this.cdr.detectChanges();
		}
	}

	ngOnInit(): void {
		this.anchorCheckInterval = setInterval(() => {
			this.checkActivePageAnchors();
		}, 500);
		this.refreshPageAnchors();
	}

	ngOnDestroy(): void {
		clearInterval(this.anchorCheckInterval);
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
		return {
			id: element.id,
			title: getAnchorTitleText(element),
			indent: getElementIndent(element),
			element,
		};
	}

	refreshPageAnchors() {
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
