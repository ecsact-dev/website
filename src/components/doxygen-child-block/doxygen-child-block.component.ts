import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenBlockComponent} from '../doxygen-block/doxygen-block.component';

@Component({
	selector: 'doxygen-child-block',
	preserveWhitespaces: true,
	templateUrl: './doxygen-child-block.component.html',
	styleUrls: ['./doxygen-child-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [DoxygenBlockComponent],
})
export class DoxygenChildBlockComponent {}
