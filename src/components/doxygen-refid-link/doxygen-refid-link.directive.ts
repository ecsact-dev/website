import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Directive({
	selector: 'a[doxygenRefidLink]',
	standalone: true,
})
export class DoxygenRefidLinkDirective {
	@Input()
	doxygenRefidLink: string;

	@Input()
	repo?: string;

	@HostBinding('attr.href')
	get href() {
		const repo = this.repo || this.route.snapshot.params.repo;
		return `/reference/${repo}/${this.doxygenRefidLink}`;
	}

	constructor(
		private route: ActivatedRoute,
		private router: Router,
	) {}

	@HostListener('click', [
		'$event.button',
		'$event.ctrlKey',
		'$event.shiftKey',
		'$event.altKey',
		'$event.metaKey',
	])
	onClick(
		button: number,
		ctrlKey: boolean,
		shiftKey: boolean,
		altKey: boolean,
		metaKey: boolean,
	) {
		if (button !== 0 || ctrlKey || shiftKey || altKey || metaKey) {
			return true;
		}

		this.router.navigateByUrl(this.href);

		return false;
	}
}
