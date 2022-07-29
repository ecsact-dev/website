import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenDefLocation} from '../../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-location',
	templateUrl: './doxygen-location.component.html',
	styleUrls: ['./doxygen-location.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenLocationComponent {
	@Input()
	location: DoxygenDefLocation;

	constructor() {}
}
