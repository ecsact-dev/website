import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartUnityComponent} from './start-unity.component';
import {StartUnityRoutingRoutingModule} from './start-unity-routing-routing.module';
import {CodeBlockVariationModule} from '../../../components/code-block-variation/code-block-variation.module';
import {PrismModule} from '../../../components/prism/prism.module';

@NgModule({
	declarations: [StartUnityComponent],
	imports: [
		StartUnityRoutingRoutingModule,
		CommonModule,
		CodeBlockVariationModule,
		PrismModule,
	],
	exports: [StartUnityComponent],
})
export class StartUnityModule {}
