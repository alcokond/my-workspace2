import { Component } from '@angular/core';
import { MercButtonSecModule } from './merc-button-sec.module';

@Component({
  standalone: true,
  selector: 'merc-button-sec-composition-cmp',
  imports: [MercButtonSecModule],
  template: `MercButtonSec composition: <merc-button-sec></merc-button-sec>`
})
export class MercButtonSecCompositionComponent {}
