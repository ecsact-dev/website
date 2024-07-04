import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import { NgIf } from '@angular/common';
import { DoxygenBlockComponent } from '../doxygen-block/doxygen-block.component';

@Component({
    selector: 'doxygen-parent-block',
    templateUrl: './doxygen-parent-block.component.html',
    styleUrls: ['./doxygen-parent-block.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [DoxygenBlockComponent, NgIf],
})
export class DoxygenParentBlockComponent {
	@Input()
	typeHeader: string;
}
