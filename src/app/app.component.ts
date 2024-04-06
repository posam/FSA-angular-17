import {Component} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    NgIf
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'course-quest';
  counterVisible = true;

  toggleCounters() {
    this.counterVisible = !this.counterVisible;
  }

}
