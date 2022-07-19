import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ObserversModule} from '@angular/cdk/observers';
import {ContentComponent} from './content.component';

@NgModule({
	declarations: [ContentComponent],
	imports: [CommonModule, ObserversModule],
	exports: [ContentComponent],
})
export class ContentModule {}
