import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

export interface IDoxygenTypeNameDef {
	typeRefid?: string;
	type?: string;
}

@Component({
	selector: 'doxygen-type-name',
	preserveWhitespaces: true,
	templateUrl: './doxygen-type-name.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenTypeNameComponent {
	@Input()
	def: IDoxygenTypeNameDef;
}
