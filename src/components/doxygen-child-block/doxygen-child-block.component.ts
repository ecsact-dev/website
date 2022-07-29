import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
	selector: 'doxygen-child-block',
	preserveWhitespaces: true,
	templateUrl: './doxygen-child-block.component.html',
	styleUrls: ['./doxygen-child-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenChildBlockComponent {}
