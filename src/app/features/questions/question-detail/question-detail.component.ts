import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {DiscussionMessageApiService} from '../../../shared/services/discussion-message-api.service';
import {DiscussionMessageModel} from '../../../shared/models/discussion-message.model';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {SectionContainerComponent} from '../../../core/components/section-container/section-container.component';
import {MessageComponent} from '../../../shared/components/message/message.component';
import {AnswerModalComponent} from '../answer-modal/answer-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    NgIf,
    SectionContainerComponent,
    MessageComponent,
    NgForOf
  ],
  templateUrl: './question-detail.component.html'
})
export class QuestionDetailComponent {

  question$: Observable<DiscussionMessageModel | undefined>;
  answers$: Observable<DiscussionMessageModel[]>;

  private refreshSubject = new BehaviorSubject(undefined);

  constructor(private route: ActivatedRoute,
              private messageApi: DiscussionMessageApiService,
              private ngbModal: NgbModal) {

    this.question$ = this.refreshSubject.asObservable()
      .pipe(switchMap(() => route.paramMap))
      .pipe(switchMap(paramMap => {
        const id = Number(paramMap.get('id'));

        return messageApi.getQuestion(id);
      }))

    this.answers$ = this.refreshSubject.asObservable()
      .pipe(switchMap(() => route.paramMap))
      .pipe(switchMap(value => {
        const id = Number(value.get('id'));
        return messageApi.getAnswers(id);
      }))

  }

  onAnswerClick(question: DiscussionMessageModel) {
    const ngbModalRef = this.ngbModal.open(AnswerModalComponent);

    ngbModalRef.componentInstance.question = question;

    ngbModalRef.result.then(() => {
      this.refreshSubject.next(undefined);
    })
  }

}
