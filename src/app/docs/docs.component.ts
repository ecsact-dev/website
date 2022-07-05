import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
	templateUrl: 'docs.component.html',
	styleUrls: ['docs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocsComponent {}
