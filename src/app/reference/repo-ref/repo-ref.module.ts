import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RepoRefComponent} from './repo-ref.component';
import {DoxygenFunctionDefModule} from '../../../components/doxygen-function-def/doxygen-function-def.module';
import {DoxygenFileDefModule} from '../../../components/doxygen-file-def/doxygen-file-def.module';
import {DoxygenDataTypeDefModule} from '../../../components/doxygen-datatype-def/doxygen-datatype-def.module';
import {DoxygenDefineDefModule} from '../../../components/doxygen-define-def/doxygen-define-def.module';
import {DoxygenDirDefModule} from '../../../components/doxygen-dir-def/doxygen-dir-def.module';
import {DoxygenEnumDefModule} from '../../../components/doxygen-enum-def/doxygen-enum-def.module';
import {DoxygenTypedefDefModule} from '../../../components/doxygen-typedef-def/doxygen-typedef-def.module';
import {DoxygenVariableDefModule} from '../../../components/doxygen-variable-def/doxygen-variable-def.module';
import {DoxygenNamespaceDefModule} from '../../../components/doxygen-namespace-def/doxygen-namespace-def.module';
import {DoxygenEnumValueDefModule} from '../../../components/doxygen-enumvalue-def/doxygen-enumvalue-def.module';
import {DoxygenNameModule} from '../../../components/doxygen-member-components/doxygen-name/doxygen-name.module';
import {DoxygenParentBlockModule} from '../../../components/doxygen-parent-block/doxygen-parent-block.module';

@NgModule({
	declarations: [RepoRefComponent],
	imports: [
		CommonModule,
		DoxygenDataTypeDefModule,
		DoxygenDefineDefModule,
		DoxygenDirDefModule,
		DoxygenEnumDefModule,
		DoxygenFileDefModule,
		DoxygenFunctionDefModule,
		DoxygenTypedefDefModule,
		DoxygenVariableDefModule,
		DoxygenNamespaceDefModule,
		DoxygenEnumValueDefModule,
		DoxygenParentBlockModule,
		DoxygenNameModule,
	],
	exports: [RepoRefComponent],
})
export class RepoRefModule {}
