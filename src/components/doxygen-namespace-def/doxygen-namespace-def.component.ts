import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenNamespaceDef} from '../../search/doxygen-def-types';

@Component({
	selector: 'doxygen-namespace-def',
	templateUrl: './doxygen-namespace-def.component.html',
	styleUrls: ['./doxygen-namespace-def.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenNamespaceDefComponent implements OnInit {
	@Input()
	def: DoxygenNamespaceDef;

	constructor() {}

	ngOnInit(): void {}
}
