import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent, AppNavItem } from './app.component';
import { ServiceWorkerService } from './service-worker.service';

@NgModule({
	declarations: [],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		ServiceWorkerModule.register('ngsw-worker.js'),
		AppNavItem,
	],
	providers: [ServiceWorkerService],
	exports: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
