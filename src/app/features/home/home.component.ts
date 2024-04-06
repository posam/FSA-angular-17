import {Component} from '@angular/core';
import {DiscussionMessageApiService} from '../../shared/services/discussion-message-api.service';
import {SectionHeadlineComponent} from '../../core/components/section-headline/section-headline.component';
import {SectionHeaderComponent} from '../../core/components/section-header/section-header.component';
import {MessageComponent} from '../../shared/components/message/message.component';
import {SectionContainerComponent} from '../../core/components/section-container/section-container.component';
import {DiscussionMessageModel} from '../../shared/models/discussion-message.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionHeadlineComponent,
    SectionHeaderComponent,
    MessageComponent,
    SectionContainerComponent,
    NgForOf
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {


   questions: DiscussionMessageModel[] | undefined;

  constructor(private messagesApi: DiscussionMessageApiService) {

    messagesApi.getDiscussionMessages()
      .subscribe(value => {
        this.questions = value;
      })
  }
}
