import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFunctionMemberDef} from '../../search/doxygen-def-types';
import { DoxygenLocationComponent } from '../doxygen-member-components/doxygen-location/doxygen-location.component';
import { DoxygenParagraphComponent } from '../doxygen-paragraph/doxygen-paragraph.component';
import { DoxygenTypeNameComponent } from '../doxygen-type-name/doxygen-type-name.component';
import { NgIf, NgFor } from '@angular/common';
import { DoxygenDescriptionComponent } from '../doxygen-member-components/doxygen-description/doxygen-description.component';

@Component({
    selector: 'doxygen-function-def',
    preserveWhitespaces: true,
    templateUrl: './doxygen-function-def.component.html',
    styleUrls: ['./doxygen-function-def.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        DoxygenDescriptionComponent,
        NgIf,
        NgFor,
        DoxygenTypeNameComponent,
        DoxygenParagraphComponent,
        DoxygenLocationComponent,
    ],
})
export class DoxygenFunctionDefComponent implements OnInit {
	@Input()
	def: DoxygenFunctionMemberDef;

	@Input()
	page_id: string;
	constructor() {}

	ngOnInit(): void {}
}
