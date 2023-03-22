import { Component } from '@angular/core';
import { MercButtonSubtleModule } from './merc-button-subtle.module';

@Component({
  standalone: true,
  selector: 'merc-button-subtle-disabled-composition-cmp',
  imports: [MercButtonSubtleModule],
  template: `<merc-button-subtle size="medium"></merc-button-subtle>`
})
export class MercButtonsubtleDisabledCompositionComponent {
  
}
