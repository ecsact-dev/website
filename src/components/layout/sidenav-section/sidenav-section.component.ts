// TODO: enable ts in this file again
// @ts-nocheck

import {CdkAccordionItem} from '@angular/cdk/accordion';
import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
	ElementRef,
	ViewChild,
	OnDestroy,
} from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';
import {delay, filter, Subscription} from 'rxjs';
import {NgIf} from '@angular/common';

/**
 * Side navigation section. Should only be used inside ecsact-sidenav
 */
@Component({
	selector: 'ecsact-sidenav > ecsact-sidenav-section',
	templateUrl: './sidenav-section.component.html',
	styleUrls: ['./sidenav-section.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CdkAccordionItem, NgIf],
})
export class SidenavSectionComponent implements OnInit, OnDestroy {
	// @HACK(zaucy): routerLinkActive not available right away
	private readonly activeAnchorCheckDelay = 500;

	@ViewChild('anchorsContainer', {static: true})
	anchorsContainer?: ElementRef<HTMLDivElement>;

	@ViewChild('accordionItem', {static: true})
	accordionItem?: CdkAccordionItem;

	@Input()
	title: string;

	private _sub = new Subscription();

	constructor(private router: Router) {}

	ngOnInit(): void {
		this._sub.add(
			this.router.events
				.pipe(
					filter(ev => ev instanceof ActivationEnd),
					delay(this.activeAnchorCheckDelay),
				)
				.subscribe(() => this.openIfActiveAnchor()),
		);

		setTimeout(() => this.openIfActiveAnchor(), this.activeAnchorCheckDelay);
	}

	ngOnDestroy(): void {
		this._sub.unsubscribe();
	}

	openIfActiveAnchor() {
		const activeAnchor =
			this.anchorsContainer!.nativeElement.querySelector('a.active');

		if (activeAnchor) {
			this.accordionItem!.open();
		}
	}
}
