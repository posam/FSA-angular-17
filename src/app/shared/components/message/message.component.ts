import {Component, Input} from '@angular/core';
import {DiscussionMessageModel} from '../../models/discussion-message.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './message.component.html'
})
export class MessageComponent {
  @Input() message!: DiscussionMessageModel;

}
