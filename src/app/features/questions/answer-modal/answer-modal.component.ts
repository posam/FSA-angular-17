import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {DiscussionMessageModel} from '../../../shared/models/discussion-message.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DiscussionMessageTypeEnum} from '../../../shared/models/discussion-message-type.enum';
import {DiscussionMessageApiService} from '../../../shared/services/discussion-message-api.service';

@Component({
  selector: 'app-answer-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './answer-modal.component.html'
})
export class AnswerModalComponent implements OnInit {

  question: DiscussionMessageModel | undefined;

  answer: DiscussionMessageModel = {
    typ: DiscussionMessageTypeEnum.ANSWER
  };


  constructor(private activeModal: NgbActiveModal,
              private messagesApiService: DiscussionMessageApiService) {
  }


  ngOnInit() {
    if (this.question) {
      this.answer.name = this.question.name;
    }
  }


  close() {
    this.activeModal.dismiss();
  }


  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    if (this.question) {
      this.messagesApiService.answerQuestion(this.question, this.answer)
        .subscribe(value => {
          this.activeModal.close(value);
        })
    }
  }

}
