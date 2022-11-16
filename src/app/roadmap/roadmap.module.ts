import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoadmapComponent} from './roadmap.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
	declarations: [RoadmapComponent],
	imports: [CommonModule, CdkAccordionModule],
	exports: [RoadmapComponent],
})
export class RoadmapModule {}
