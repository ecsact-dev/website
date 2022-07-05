import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [SearchComponent],
	imports: [RouterModule, CommonModule],
	exports: [SearchComponent],
})
export class SearchModule {}
