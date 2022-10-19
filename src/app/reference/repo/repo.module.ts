import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoComponent} from './repo.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DoxygenRefidLinkModule} from '../../../components/doxygen-refid-link/doxygen-refid-link.module';
import {DoxygenPageDefModule} from '../../../components/doxygen-page-def/doxygen-page-def.module';

@NgModule({
	declarations: [RepoComponent],
	imports: [
		CommonModule,
		RouterModule,
		DoxygenRefidLinkModule,
		FormsModule,
		DoxygenPageDefModule,
	],
	exports: [RepoComponent],
})
export class RepoModule {}
