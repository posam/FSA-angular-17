import {Component} from '@angular/core';
import {DiscussionMessageApiService} from '../../shared/services/discussion-message-api.service';
import {SectionHeadlineComponent} from '../../core/components/section-headline/section-headline.component';
import {SectionHeaderComponent} from '../../core/components/section-header/section-header.component';
import {MessageComponent} from '../../shared/components/message/message.component';
import {SectionContainerComponent} from '../../core/components/section-container/section-container.component';
import {DiscussionMessageModel} from '../../shared/models/discussion-message.model';
import {AsyncPipe, NgForOf} from '@angular/common';
import {BehaviorSubject, Observable, switchMap} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {QuestionModalComponent} from '../../question-modal/question-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionHeadlineComponent,
    SectionHeaderComponent,
    MessageComponent,
    SectionContainerComponent,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  questions$: Observable<DiscussionMessageModel[]>;

  refreshSubject = new BehaviorSubject(undefined);

  constructor(messagesApi: DiscussionMessageApiService,
              private ngbModal: NgbModal) {

    this.questions$ = this.refreshSubject.asObservable()
      .pipe(switchMap(() => messagesApi.getLatestQuestions()));
  }

  onNewQuestionClick() {
    const modalRef = this.ngbModal.open(QuestionModalComponent);

    modalRef.result.then(() => {
      this.refreshSubject.next(undefined);
    })
  }

}
