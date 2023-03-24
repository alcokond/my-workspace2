import { Component } from '@angular/core';
import { MercButtonDarkPrimaryModule } from './merc-button-dark-primary.module';

@Component({
  standalone: true,
  selector: 'merc-button-dark-primary-large-composition-cmp',
  imports: [MercButtonDarkPrimaryModule],
  template: `<div style="display: flex; width: 25%; height: 200px; background: #222D44; border-radius: 8px; align-items: center; justify-content: center;" ><merc-button-dark-primary size="large"></merc-button-dark-primary></div>`
})
export class MercButtonDarkPrimaryLargeCompositionComponent {
  
}
