import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {initializeApp} from 'firebase/app';

import {ServiceWorkerService} from './service-worker.service';

@Component({
	selector: 'ecsact-dev-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	constructor(private swService: ServiceWorkerService) {
		this.swService.launchUpdateCheckingRoutine();
	}
}

// 	ngOnInit() {
// 		initializeApp({
// 			apiKey: 'AIzaSyBKeB1T-abSePIotAnvIKATvInXTfi8UVM',
// 			authDomain: 'seaube.firebaseapp.com',
// 			databaseURL: 'https://seaube.firebaseio.com',
// 			projectId: 'seaube',
// 			storageBucket: 'seaube.appspot.com',
// 			messagingSenderId: '481327578169',
// 			appId: '1:481327578169:web:d83f7495110cdc7f5c21e8',
// 		});
// 	}
// }
