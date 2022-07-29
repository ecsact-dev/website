import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReferenceComponent} from './reference.component';
import {ReferenceModule} from './reference.module';
import {RepoRefComponent} from './repo-ref/repo-ref.component';
import {RepoComponent} from './repo/repo.component';

@NgModule({
	imports: [
		ReferenceModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'prefix',
				component: ReferenceComponent,
				children: [
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
export class ReferenceRoutingModule {}
