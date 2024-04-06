import {Component} from '@angular/core';
import {CounterComponent} from './component/counter/counter.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-counters',
  standalone: true,
  imports: [
    CounterComponent,
    NgIf
  ],
  templateUrl: './counters.component.html'
})
export class CountersComponent {
  counterVisible = true;

  toggleCounters() {
    this.counterVisible = !this.counterVisible;
  }
}
