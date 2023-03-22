import { Component } from '@angular/core';
import { MercButtonSecondaryModule } from './merc-button-secondary.module';

@Component({
  standalone: true,
  selector: 'merc-button-secondary-large-disabled-composition-cmp',
  imports: [MercButtonSecondaryModule],
  template: `<merc-button-secondary size="large"></merc-button-secondary>`
})
export class MercButtonSecondaryLargeCompositionComponent {
  
}
