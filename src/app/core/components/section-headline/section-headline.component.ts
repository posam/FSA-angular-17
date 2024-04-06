import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-headline',
  standalone: true,
  imports: [],
  templateUrl: './section-headline.component.html'
})
export class SectionHeadlineComponent {

  @Input() headline: string | undefined;

}
