import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DiscussionMessageModel} from '../../../shared/models/discussion-message.model';
import {DiscussionMessageTypeEnum} from '../../../shared/models/discussion-message-type.enum';
import {UserService} from '../../../user.service';
import {FormsModule, NgForm} from '@angular/forms';
import {DiscussionMessageApiService} from '../../../shared/services/discussion-message-api.service';

@Component({
  selector: 'app-question-modal',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './question-modal.component.html'
})
export class QuestionModalComponent {

  question: DiscussionMessageModel = {
    typ: DiscussionMessageTypeEnum.QUESTION
    // createdBy: this.userService.getUser()
  }

  constructor(private activeModal: NgbActiveModal,
              private userService: UserService,
              private messageApi: DiscussionMessageApiService) {
  }

  close() {
    this.activeModal.dismiss()
  }

  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.messageApi.createQuestion(this.question)
      .subscribe(value => {
        this.activeModal.close();
      })

  }
}
