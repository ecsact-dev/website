import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';

import {GetStartedComponent} from './getstarted.component';

@NgModule({
	declarations: [GetStartedComponent],
	imports: [RouterModule, ContentModule, SidenavModule, SidenavSectionModule],
	exports: [GetStartedComponent],
	bootstrap: [],
})
export class GetStartedModule {}
