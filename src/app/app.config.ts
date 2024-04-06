import {ApplicationConfig, importProvidersFrom, LOCALE_ID} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {OAuthModule} from 'angular-oauth2-oidc';
import {authInterceptor} from './core/inteceptors/auth.interceptor';
import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';

registerLocaleData(localeSk, 'sk')

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([
      authInterceptor
    ])),
    {provide: LOCALE_ID, useValue: 'sk'},
    provideRouter(routes),
    importProvidersFrom(
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['/'],
          sendAccessToken: true
        }
      })
    )
  ]
};
