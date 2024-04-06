import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [],
  templateUrl: './section-header.component.html'
})
export class SectionHeaderComponent {

  @Input()header: string | undefined;

}
