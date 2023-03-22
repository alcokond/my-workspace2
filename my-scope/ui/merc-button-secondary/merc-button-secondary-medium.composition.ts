import { Component } from '@angular/core';
import { MercButtonSecondaryModule } from './merc-button-secondary.module';

@Component({
  standalone: true,
  selector: 'merc-button-secondary-medium-disabled-composition-cmp',
  imports: [MercButtonSecondaryModule],
  template: `<merc-button-secondary size="medium"></merc-button-secondary>`
})
export class MercButtonSecondaryMediumCompositionComponent {
  
}
