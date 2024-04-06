import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {UserService} from './user.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {UserModel} from './shared/models/user.model';
import {Observable} from 'rxjs';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';
import {InitialsPipe} from './initials.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgIf,
    AsyncPipe,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    InitialsPipe
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  user$: Observable<UserModel | undefined>;

  constructor(private userService: UserService) {
    this.user$ = userService.getUserChanges();
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
