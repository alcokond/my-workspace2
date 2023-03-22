import { Component } from '@angular/core';
import { MercButtonOutstandingModule } from './merc-button-outstanding.module';

@Component({
  standalone: true,
  selector: 'merc-button-outstanding-small-composition-cmp',
  imports: [MercButtonOutstandingModule],
  template: `<merc-button-outstanding></merc-button-outstanding>`
})
export class MercButtonOutstandingSmallCompositionComponent {}
