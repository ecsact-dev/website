import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'moving-block',
	templateUrl: './moving-block.component.html',
	styleUrls: ['./moving-block.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovingBlockComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
