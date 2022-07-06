import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoRefComponent} from './repo-ref.component';
import {DoxygenFunctionDefModule} from '../../../components/doxygen-function-def/doxygen-function-def.module';
import {DoxygenFileDefModule} from '../../../components/doxygen-file-def/doxygen-file-def.module';
import {DoxygenClassDefModule} from '../../../components/doxygen-class-def/doxygen-class-def.module';
import {DoxygenDefineDefModule} from '../../../components/doxygen-define-def/doxygen-define-def.module';
import {DoxygenDirDefModule} from '../../../components/doxygen-dir-def/doxygen-dir-def.module';
import {DoxygenEnumDefModule} from '../../../components/doxygen-enum-def/doxygen-enum-def.module';
import {DoxygenTypedefDefModule} from '../../../components/doxygen-typedef-def/doxygen-typedef-def.module';
import {DoxygenStructDefModule} from '../../../components/doxygen-struct-def/doxygen-struct-def.module';

@NgModule({
	declarations: [RepoRefComponent],
	imports: [
		CommonModule,
		DoxygenClassDefModule,
		DoxygenDefineDefModule,
		DoxygenDirDefModule,
		DoxygenEnumDefModule,
		DoxygenFileDefModule,
		DoxygenFunctionDefModule,
		DoxygenStructDefModule,
		DoxygenTypedefDefModule,
	],
	exports: [RepoRefComponent],
})
export class RepoRefModule {}
