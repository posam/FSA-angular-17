import { Component } from '@angular/core';
import {DiscussionMessageApiService} from '../../shared/services/discussion-message-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private messagesApi: DiscussionMessageApiService) {

    messagesApi.getDiscussionMessages()
      .subscribe(value => {

      })
  }
}
