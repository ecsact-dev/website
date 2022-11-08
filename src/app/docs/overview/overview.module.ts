import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ShowcaseModule} from '../../../components/layout/showcase/showcase.module';

import {OverviewComponent} from './overview.component';

@NgModule({
	declarations: [OverviewComponent],
	imports: [RouterModule, ShowcaseModule],
	exports: [OverviewComponent],
	bootstrap: [],
})
export class OverviewModule {}
