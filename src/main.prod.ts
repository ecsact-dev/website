/**
 * Used to launch the application under Bazel production mode.
 */
import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {initializeApp} from 'firebase/app';
import {AppModule} from './app/app.module';

initializeApp({
	apiKey: 'AIzaSyB1rmoe3C5NVNVxHy3-wxrYb5U-2dwV3b0',
	authDomain: 'ecsact-dev.firebaseapp.com',
	projectId: 'ecsact-dev',
	storageBucket: 'ecsact-dev.appspot.com',
	messagingSenderId: '1050343672321',
	appId: '1:1050343672321:web:eb108be4f2d458e5c88e00',
	measurementId: 'G-61LKP46HQ3',
});
enableProdMode();
platformBrowser().bootstrapModule(AppModule);
