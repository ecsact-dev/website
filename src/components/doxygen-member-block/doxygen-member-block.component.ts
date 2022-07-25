import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
	selector: 'doxygen-member-block',
	preserveWhitespaces: true,
	templateUrl: './doxygen-member-block.component.html',
	styleUrls: ['./doxygen-member-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoxygenMemberBlockComponent {}
