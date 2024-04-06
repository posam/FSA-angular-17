import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private count = new BehaviorSubject<number>(0);

  constructor() {
  }

  getCount() {
    return this.count.value;
  }

  increment() {
    this.count.next(this.count.value + 1);
  }

  getCountChanges(){
    return this.count.asObservable();
  }
}
