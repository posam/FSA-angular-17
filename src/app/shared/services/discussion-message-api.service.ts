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

  getQuestions() {
    return this.getDiscussionMessages()
      .pipe(map(value => value
        .filter(value1 => {
          return value1.typ === DiscussionMessageTypeEnum.QUESTION;
        })));
  }

  getLatestQuestions() {
    return this.getQuestions()
      .pipe(map(value => value.slice(0, 3)));
  }

  createQuestion(question: DiscussionMessageModel) {
    question.created = new Date();

    return this.http.post<DiscussionMessageModel[]>('/discussion-messages',
      question);
  }


  getQuestion(id: number) {
    return this.getQuestions()
      .pipe(map(value => {
        return value.find(value1 => {
          return value1.id = id;
        })
      }));
  }
}
