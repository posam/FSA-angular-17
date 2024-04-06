import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SectionHeadlineComponent} from '../../core/components/section-headline/section-headline.component';

@Component({
  selector: 'app-calc',
  standalone: true,
    imports: [
        FormsModule,
        SectionHeadlineComponent
    ],
  templateUrl: './calc.component.html'
})
export class CalcComponent {
  valueA = 0;
  valueB = 0;
}
