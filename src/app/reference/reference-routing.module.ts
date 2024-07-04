import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { OverviewModule } from './overview/overview.module';
import { ReferenceComponent } from './reference.component';
import { ReferenceModule } from './reference.module';
import { RepoRefComponent } from './repo-ref/repo-ref.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
	imports: [
		ReferenceModule,
		OverviewModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'prefix',
				component: ReferenceComponent,
				children: [
					{
						path: '',
						pathMatch: 'full',
						component: OverviewComponent,
					},
					{
						path: ':repo',
						pathMatch: 'full',
						component: RepoComponent,
					},
					{
						path: ':repo/:refid',
						pathMatch: 'full',
						component: RepoRefComponent,
					},
				],
			},
		]),
	],
	exports: [],
})
export class ReferenceRoutingModule { }
