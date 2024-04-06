import {Component} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'course-quest';
  counterVisible = true;

  valueA = 0;
  valueB = 0;

  toggleCounters() {
    this.counterVisible = !this.counterVisible;
  }

}
