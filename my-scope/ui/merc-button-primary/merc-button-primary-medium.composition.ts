import { Component } from '@angular/core';
import { MercButtonPrimaryModule } from './merc-button-primary.module';

@Component({
  standalone: true,
  selector: 'merc-button-primary-disabled-composition-cmp',
  imports: [MercButtonPrimaryModule],
  template: `<merc-button-primary size="medium"></merc-button-primary>`
})
export class MercButtonPrimaryDisabledCompositionComponent {
  
}
