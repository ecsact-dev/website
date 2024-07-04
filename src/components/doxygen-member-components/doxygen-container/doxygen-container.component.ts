import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
	selector: 'doxygen-container',
	templateUrl: './doxygen-container.component.html',
	styleUrls: ['./doxygen-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class DoxygenContainerComponent {}
