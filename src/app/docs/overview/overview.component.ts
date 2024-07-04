import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	OnDestroy,
	OnInit,
} from '@angular/core';
import { ShowcaseComponent } from '../../../components/layout/showcase/showcase.component';
import { RouterLink } from '@angular/router';
import { EcsactLangSyntaxComponent } from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';
import { EcsactExampleDiagramComponent } from '../../../components/ecsact-example-diagram/ecsact-example-diagram.component';

@Component({
	templateUrl: 'overview.component.html',
	styleUrls: ['overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		EcsactExampleDiagramComponent,
		EcsactLangSyntaxComponent,
		RouterLink,
		ShowcaseComponent,
	],
})
export class OverviewComponent implements OnInit, OnDestroy {
	private mediaQuery: MediaQueryList;
	private readonly onMediaQueryChange: (ev: MediaQueryListEvent) => void;

	constructor(cdr: ChangeDetectorRef) {
		this.mediaQuery = window.matchMedia('(max-width: 1024px)');
		this.onMediaQueryChange = ev => {
			cdr.detectChanges();
		};
	}

	public smallWidth() {
		return this.mediaQuery.matches;
	}

	ngOnInit() {
		this.mediaQuery.addEventListener('change', this.onMediaQueryChange);
	}

	ngOnDestroy() {
		this.mediaQuery.removeEventListener('change', this.onMediaQueryChange);
	}
}
