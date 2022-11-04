import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartGodotComponent} from './start-godot.component';
import {StartGodotRoutingRoutingModule} from './start-godot-routing-routing.module';

@NgModule({
	declarations: [StartGodotComponent],
	imports: [StartGodotRoutingRoutingModule, CommonModule],
	exports: [StartGodotComponent],
})
export class StartGodotModule {}
