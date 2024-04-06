import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import {DiscussionMessageApiService} from '../../../shared/services/discussion-message-api.service';
import {DiscussionMessageModel} from '../../../shared/models/discussion-message.model';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent {

  question$: Observable<DiscussionMessageModel | undefined>;

  constructor(private route: ActivatedRoute,
              private messageApi: DiscussionMessageApiService) {
    this.question$ = route.paramMap
      .pipe(switchMap(paramMap => {
        const id = Number(paramMap.get('id'));

        return messageApi.getQuestion(id);
      }))
  }

}
