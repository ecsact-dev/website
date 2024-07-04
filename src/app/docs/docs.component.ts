import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SidenavComponent} from '../../components/layout/sidenav/sidenav.component';
import {SidenavSectionComponent} from '../../components/layout/sidenav-section/sidenav-section.component';
import {CppSystemImplWasmComponent} from './cpp-system-impl-wasm/cpp-system-impl-wasm.component';
import {ShowcaseComponent} from '../../components/layout/showcase/showcase.component';
import {SystemImplWasmComponent} from './system-impl-wasm/system-impl-wasm.component';
import {ContentComponent} from '../../components/layout/content/content.component';

@Component({
	templateUrl: 'docs.component.html',
	styleUrls: ['docs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [
		RouterModule,
		SidenavComponent,
		SidenavSectionComponent,
		ContentComponent,
		SystemImplWasmComponent,
		CppSystemImplWasmComponent,
		ShowcaseComponent,
	],
})
export class DocsComponent {}
