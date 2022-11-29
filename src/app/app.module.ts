import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {ServiceWorkerModule} from '@angular/service-worker';
import {SearchModule} from '../components/search/search.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent, AppNavItem} from './app.component';
import {ServiceWorkerService} from './service-worker.service';

@NgModule({
	declarations: [AppComponent, AppNavItem],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule,
		SearchModule,
		ServiceWorkerModule.register('ngsw-worker.js'),
	],
	providers: [ServiceWorkerService],
	exports: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
