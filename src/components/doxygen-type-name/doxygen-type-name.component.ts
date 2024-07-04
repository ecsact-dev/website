import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {DoxygenRefidLinkDirective} from '../doxygen-refid-link/doxygen-refid-link.directive';
import {NgIf} from '@angular/common';

export interface IDoxygenTypeNameDef {
	typeRefid?: string;
	type?: string;
}

@Component({
	selector: 'doxygen-type-name',
	preserveWhitespaces: true,
	templateUrl: './doxygen-type-name.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgIf, DoxygenRefidLinkDirective],
})
export class DoxygenTypeNameComponent {
	@Input()
	def: IDoxygenTypeNameDef;
}
