import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObserversModule} from '@angular/cdk/observers';
import {ContentComponent} from './content.component';
import {RouterModule} from '@angular/router';

@NgModule({
	declarations: [ContentComponent],
	imports: [CommonModule, ObserversModule, RouterModule],
	exports: [ContentComponent],
})
export class ContentModule {}
