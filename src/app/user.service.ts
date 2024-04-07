import {Injectable} from '@angular/core';
import {OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './core/config/authCodeFlowConfig';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new BehaviorSubject<UserModel | undefined>(undefined);


  constructor(private oauthService: OAuthService) {
    oauthService.configure(authCodeFlowConfig);
    this.tryLogin();
  }

  tryLogin() {
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(value => {
        this.user.next(this.oauthService.getIdentityClaims() as UserModel);
      })
  }

  login() {
    this.oauthService.loadDiscoveryDocumentAndLogin()
      .then(value => {
        this.user.next(this.oauthService.getIdentityClaims() as UserModel);
      })
  }

  logout() {
    this.oauthService.logOut();
    this.user.next(undefined);
  }

  getUserChanges() {
    return this.user.asObservable();
  }

  getUser() {
    return this.user.getValue();
  }
}
