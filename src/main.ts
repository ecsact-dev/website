import {
	ApplicationConfig,
	enableProdMode,
	importProvidersFrom,
} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {initializeApp} from 'firebase/app';
import {AppComponent} from './app/app.component';
import {AppModule} from './app/app.module';

declare const process: any;
if (process.env.NODE_ENV === 'production') {
	enableProdMode();
}

initializeApp({
	apiKey: 'AIzaSyB1rmoe3C5NVNVxHy3-wxrYb5U-2dwV3b0',
	authDomain: 'ecsact-dev.firebaseapp.com',
	projectId: 'ecsact-dev',
	storageBucket: 'ecsact-dev.appspot.com',
	messagingSenderId: '1050343672321',
	appId: '1:1050343672321:web:eb108be4f2d458e5c88e00',
	measurementId: 'G-61LKP46HQ3',
});

const appConfig: ApplicationConfig = {
	providers: [importProvidersFrom(AppModule)],
};

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
