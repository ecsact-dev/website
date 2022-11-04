import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartUnrealComponent} from './start-unreal.component';
import {StartUnrealRoutingRoutingModule} from './start-unreal-routing-routing.module';

@NgModule({
	declarations: [StartUnrealComponent],
	imports: [StartUnrealRoutingRoutingModule, CommonModule],
	exports: [StartUnrealComponent],
})
export class StartUnrealModule {}
