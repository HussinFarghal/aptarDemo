import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {GeneralHeadersInterceptor} from "./shared/interceptors/general-headers.interceptor";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/services/in-memory-data.service";

export const appConfig : ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(
      [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true})

      ]
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralHeadersInterceptor,
      multi: true
    }
  ],
};
