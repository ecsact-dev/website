import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContentModule} from '../../components/layout/content/content.module';
import {SidenavSectionModule} from '../../components/layout/sidenav-section/sidenav-section.module';
import {SidenavModule} from '../../components/layout/sidenav/sidenav.module';
import {CppSystemImplWasmModule} from './cpp-system-impl-wasm/cpp-system-impl-wasm.module';
import {ShowcaseModule} from '../../components/layout/showcase/showcase.module';

import {DocsComponent} from './docs.component';
import {SystemImplWasmModule} from './system-impl-wasm/system-impl-wasm.module';

@NgModule({
	declarations: [DocsComponent],
	imports: [
		RouterModule,
		SidenavModule,
		SidenavSectionModule,
		ContentModule,
		SystemImplWasmModule,
		CppSystemImplWasmModule,
		ShowcaseModule,
	],
	exports: [DocsComponent],
	bootstrap: [],
})
export class DocsModule {}
