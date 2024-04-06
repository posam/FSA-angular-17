import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {DefaultOAuthInterceptor, OAuthModule, provideOAuthClient} from 'angular-oauth2-oidc';
import {authInterceptor} from './core/inteceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    provideOAuthClient({
      resourceServer: {
        allowedUrls: ['/'],
        sendAccessToken: true
      }
    })
  ]
};
