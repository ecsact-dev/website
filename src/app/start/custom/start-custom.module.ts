import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartCustomComponent} from './start-custom.component';
import {StartCustomRoutingRoutingModule} from './start-custom-routing-routing.module';

@NgModule({
	declarations: [StartCustomComponent],
	imports: [StartCustomRoutingRoutingModule, CommonModule],
	exports: [StartCustomComponent],
})
export class StartCustomModule {}
