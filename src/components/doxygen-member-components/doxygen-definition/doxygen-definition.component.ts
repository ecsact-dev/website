import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
	selector: 'doxygen-definition',
	templateUrl: './doxygen-definition.component.html',
	styleUrls: ['./doxygen-definition.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenDefinitionComponent {
	@Input()
	definition: string;
	@Input()
	argsstring: string;
}
