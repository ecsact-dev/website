import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenFileDef} from '../../search/doxygen-def-types';
import { DoxygenRefidLinkDirective } from '../doxygen-refid-link/doxygen-refid-link.directive';
import { NgIf, NgFor } from '@angular/common';
import { DoxygenParentBlockComponent } from '../doxygen-parent-block/doxygen-parent-block.component';

@Component({
    selector: 'doxygen-file-def',
    templateUrl: './doxygen-file-def.component.html',
    styleUrls: ['./doxygen-file-def.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        DoxygenParentBlockComponent,
        NgIf,
        NgFor,
        DoxygenRefidLinkDirective,
    ],
})
export class DoxygenFileDefComponent implements OnInit {
	@Input()
	def: DoxygenFileDef;

	constructor() {}

	ngOnInit(): void {}
}
