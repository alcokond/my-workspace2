import { Component } from '@angular/core';
import { MercButtonPrimaryModule } from './merc-button-primary.module';

@Component({
  standalone: true,
  selector: 'merc-button-primary-composition-cmp',
  imports: [MercButtonPrimaryModule],
  template: `<merc-button-primary>
  </merc-button-primary>`
})
export class MercButtonPrimaryCompositionComponent {}
