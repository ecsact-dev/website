import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CodeBlockVariationModule} from '../../../../components/code-block-variation/code-block-variation.module';

import {SystemImplComponent} from './system-impl.component';

@NgModule({
	declarations: [SystemImplComponent],
	imports: [RouterModule, CodeBlockVariationModule],
	exports: [SystemImplComponent],
	bootstrap: [],
})
export class SystemImplModule {}
