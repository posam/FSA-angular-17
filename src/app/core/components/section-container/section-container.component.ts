import {Component, Input} from '@angular/core';
import {SectionHeaderComponent} from '../section-header/section-header.component';

@Component({
  selector: 'app-section-container',
  standalone: true,
  imports: [
    SectionHeaderComponent
  ],
  templateUrl: './section-container.component.html'
})
export class SectionContainerComponent {
  @Input() header: string | undefined;

}
