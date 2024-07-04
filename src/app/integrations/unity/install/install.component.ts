import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    templateUrl: 'install.component.html',
    styleUrls: ['install.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class UnityInstallPageComponent {}
