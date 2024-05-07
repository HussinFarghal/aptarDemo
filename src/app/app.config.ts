import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GeneralHeadersInterceptor} from "./shared/interceptors/general-headers.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom([BrowserModule, BrowserAnimationsModule, HttpClientModule]),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralHeadersInterceptor,
      multi: true
    }
  ],
};
