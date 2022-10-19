import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoComponent} from './repo.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DoxygenRefidLinkModule} from '../../../components/doxygen-refid-link/doxygen-refid-link.module';

@NgModule({
	declarations: [RepoComponent],
	imports: [CommonModule, RouterModule, DoxygenRefidLinkModule, FormsModule],
	exports: [RepoComponent],
})
export class RepoModule {}
