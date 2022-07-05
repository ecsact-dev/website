import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {GetStartedComponent} from './getstarted.component';

@NgModule({
	declarations: [GetStartedComponent],
	imports: [RouterModule],
	exports: [GetStartedComponent],
	bootstrap: [],
})
export class GetStartedModule {}
