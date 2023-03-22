import { Component } from '@angular/core';
import { MercButtonOutstandingModule } from './merc-button-outstanding.module';

@Component({
  standalone: true,
  selector: 'merc-button-outstanding-disabled-composition-cmp',
  imports: [MercButtonOutstandingModule],
  template: `<merc-button-outstanding size="medium"></merc-button-outstanding>`
})
export class MercButtonOutstandingDisabledCompositionComponent {
  
}
