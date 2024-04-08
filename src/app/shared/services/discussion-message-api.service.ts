import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiscussionMessageModel} from '../models/discussion-message.model';
import {map, switchMap} from 'rxjs';
import {DiscussionMessageTypeEnum} from '../models/discussion-message-type.enum';
import {environment} from '../../../environments/environment';
import {UserService} from '../../user.service';
import {UserRoleEnum} from '../models/user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class DiscussionMessageApiService {

  apiUrl = environment.beUrl + '/discussion-messages';

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  getDiscussionMessages() {

    return this.http.get<DiscussionMessageModel[]>(this.apiUrl);
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

    return this.http.post<DiscussionMessageModel[]>(environment.beUrl + '/discussion-messages',
      question);
  }


  getQuestion(id: number) {
    return this.getQuestions()
      .pipe(map(value => {
        return value.find(value1 => {
          return value1.id === id;
        })
      }));
  }

  getAllAnswers() {
    return this.getDiscussionMessages()
      .pipe(map(value => value
        .filter(value1 => {
          return value1.typ === DiscussionMessageTypeEnum.ANSWER;
        })));
  }

  getAnswers(id: number) {
    return this.getQuestion(id)
      .pipe(switchMap(question => {
        return this.getAllAnswers()
          .pipe(map(allAnswers => allAnswers.filter(answer => answer.name === question?.name)));
      }))
  }

  answerQuestion(question: DiscussionMessageModel, answer: DiscussionMessageModel) {
    const answerBody = {...answer};
    answerBody.created = new Date();
    answerBody.createdBy = this.userService.getUser();

    if (answerBody.createdBy) {
      answerBody.createdBy.rola = UserRoleEnum.STUDENT;//HACK lebo mi to neposlal BE
    }

    return this.http.post(this.apiUrl + '/' + question.id + '/reply', answerBody);
  }

}
