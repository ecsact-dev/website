import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenContainerComponent} from '../doxygen-container/doxygen-container.component';

@Component({
	selector: 'doxygen-definition',
	templateUrl: './doxygen-definition.component.html',
	styleUrls: ['./doxygen-definition.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [DoxygenContainerComponent],
})
export class DoxygenDefinitionComponent {
	@Input()
	definition: string;
	@Input()
	argsstring: string;
}
