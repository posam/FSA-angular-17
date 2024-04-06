import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DiscussionMessageModel} from '../models/discussion-message.model';

@Injectable({
  providedIn: 'root'
})
export class DiscussionMessageApiService {

  constructor(private http: HttpClient) { }

  getDiscussionMessages(){
    return this.http.get<DiscussionMessageModel[]>('/discussion-messages');
  }

}
