import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GeneralHeadersInterceptor} from "@shared/interceptors/general-headers.interceptor";
import {environment} from "@env/environment";
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from "@shared/services/in-memory-data.service";
import {JoyrideModule} from "ngx-joyride";
import {FormlyModule} from "@ngx-formly/core";
import {FormlyPrimeNGModule} from "@ngx-formly/primeng";

const providers = [provideRouter(routes),
  importProvidersFrom([BrowserModule, BrowserAnimationsModule, HttpClientModule, JoyrideModule.forRoot(), FormlyModule.forRoot(), FormlyPrimeNGModule]),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: GeneralHeadersInterceptor,
    multi: true
  }
];
if (environment.mockApi.isMockEnabled) {
  providers.push(importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
    passThruUnknownUrl: true,
    delay: 1000,
  })));
}
export const appConfig: ApplicationConfig = {

  providers: providers,
};
