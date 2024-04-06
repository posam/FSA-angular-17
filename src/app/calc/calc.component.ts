import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calc.component.html'
})
export class CalcComponent {
  valueA = 0;
  valueB = 0;
}
