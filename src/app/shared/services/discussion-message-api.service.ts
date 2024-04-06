import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiscussionMessageModel} from '../models/discussion-message.model';
import {map} from 'rxjs';
import {DiscussionMessageTypeEnum} from '../models/discussion-message-type.enum';

@Injectable({
  providedIn: 'root'
})
export class DiscussionMessageApiService {

  constructor(private http: HttpClient) {
  }

  getDiscussionMessages() {
    return this.http.get<DiscussionMessageModel[]>('/discussion-messages');
  }

  getLatestQuestions() {
    return this.getDiscussionMessages()
      .pipe(map(value => value
        .filter(value1 => {
          return value1.typ === DiscussionMessageTypeEnum.QUESTION;
        })
        .slice(0, 3)));
  }

}
