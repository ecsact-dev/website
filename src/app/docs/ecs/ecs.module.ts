import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {EcsComponent} from './ecs.component';

@NgModule({
	declarations: [EcsComponent],
	imports: [RouterModule],
	exports: [EcsComponent],
	bootstrap: [],
})
export class EcsModule {}
