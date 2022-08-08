import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';

import {TutorialsComponent} from './tutorials.component';

@NgModule({
	declarations: [TutorialsComponent],
	imports: [RouterModule, ContentModule, SidenavModule, SidenavSectionModule],
	exports: [TutorialsComponent],
	bootstrap: [],
})
export class TutorialsModule {}
