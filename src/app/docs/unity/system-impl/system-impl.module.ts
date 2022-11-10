import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';
import {PrismModule} from '../../../../components/prism/prism.module';

import {SystemImplComponent} from './system-impl.component';

@NgModule({
	declarations: [SystemImplComponent],
	imports: [RouterModule, CodeBlockVariationModule, PrismModule],
	exports: [SystemImplComponent],
	bootstrap: [],
})
export class SystemImplModule {}
