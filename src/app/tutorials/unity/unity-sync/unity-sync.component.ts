import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
	selector: 'unity-sync',
	templateUrl: './unity-sync.component.html',
	styleUrls: ['./unity-sync.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnitySyncComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
