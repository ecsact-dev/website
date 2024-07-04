import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search } from '../../search/search.service';
import { ContentComponent } from '../../components/layout/content/content.component';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SidenavSectionComponent } from '../../components/layout/sidenav-section/sidenav-section.component';
import { SidenavComponent } from '../../components/layout/sidenav/sidenav.component';
@Component({
	templateUrl: 'reference.component.html',
	styleUrls: ['reference.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		SidenavComponent,
		SidenavSectionComponent,
		RouterLink,
		RouterLinkActive,
		NgFor,
		ContentComponent,
		RouterOutlet,
	],
})
export class ReferenceComponent {
	get repos() {
		return this.search.repos;
	}

	constructor(private search: Search) { }
}
