import { Component } from '@angular/core';
import { MercButtonSecondaryModule } from './merc-button-secondary.module';

@Component({
  standalone: true,
  selector: 'merc-button-secondary-small-composition-cmp',
  imports: [MercButtonSecondaryModule],
  template: `<merc-button-secondary></merc-button-secondary>`
})
export class MercButtonSecondarySmallCompositionComponent {}
