import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'tutorials.component.html',
	styleUrls: ['tutorials.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorialsComponent {}
