import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';

import {MediaMatcher} from '@angular/cdk/layout';

function makeRadialGradient(...args: string[]): string {
	return `radial-gradient(${args.join(', ')})`;
}

@Component({
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	@ViewChild('logoMask')
	logoMask: ElementRef<HTMLDivElement>;

	@ViewChild('logoOutlineMask')
	logoOutlineMask: ElementRef<HTMLDivElement>;

	private readonly _noHoverQueryList: MediaQueryList;

	constructor(mediaMatch: MediaMatcher) {
		this._noHoverQueryList = mediaMatch.matchMedia('(hover: none)');
	}

	@HostListener('window:mousemove', ['$event'])
	onMouseMove(ev: MouseEvent) {
		if (this._noHoverQueryList.matches) return;

		const logoMaskEl = this.logoMask.nativeElement;
		const logoOutlineMaskEl = this.logoOutlineMask.nativeElement;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;
		const mouseXpercentage = Math.round((ev.pageX / windowWidth) * 100);
		const mouseYpercentage = Math.round((ev.pageY / windowHeight) * 100);

		logoMaskEl.style.background = makeRadialGradient(
			`at ${mouseXpercentage}% ${mouseYpercentage}%`,
			`var(--color-secondary)`,
			`var(--color-primary-bright)`,
		);

		logoOutlineMaskEl.style.background = makeRadialGradient(
			`at ${mouseXpercentage}% ${mouseYpercentage}%`,
			`#000000`,
			`var(--color-secondary)`,
		);
	}
}
