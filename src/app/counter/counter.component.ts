import {Component} from '@angular/core';
import {CounterService} from '../counter.service';
import {map, Observable, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {SignPipe} from '../sign.pipe';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    AsyncPipe,
    SignPipe
  ],
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  count$: Observable<number>;

  constructor(private counterService: CounterService) {
    this.count$ = counterService.getCountChanges()
      .pipe(tap(value => {
        console.log(value);
      }))
      .pipe(map(value => {
        return value * 2;
      }))
  }

  increment() {
    this.counterService.increment();
  }

}
