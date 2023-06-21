import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	ViewChild,
} from '@angular/core';

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

	@HostListener('window:mousemove', ['$event'])
	onMouseMove(ev: MouseEvent) {
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
