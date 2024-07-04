import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'introduction.component.html',
	styleUrls: ['introduction.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class IntroductionComponent {}
