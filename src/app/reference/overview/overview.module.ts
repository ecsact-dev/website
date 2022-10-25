import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OverviewComponent} from './overview.component';

@NgModule({
	declarations: [OverviewComponent],
	imports: [RouterModule],
	exports: [OverviewComponent],
})
export class OverviewModule {}
