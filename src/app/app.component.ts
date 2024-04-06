import {Component} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CalcComponent} from './calc/calc.component';
import {CountersComponent} from './counters/counters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent,
    NgIf,
    FormsModule,
    CalcComponent,
    CountersComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'course-quest';


}
