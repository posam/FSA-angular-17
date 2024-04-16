import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(OAuthService);

  let accessToken = authService.getAccessToken();

  const newRew = req.clone({
    headers: req.headers.set('Authorization',
      'Bearer ' + accessToken)
  })

  return next(newRew);
};
