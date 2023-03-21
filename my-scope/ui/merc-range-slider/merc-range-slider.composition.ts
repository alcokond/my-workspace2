import { Component } from '@angular/core';
import { MercRangeSliderModule } from './merc-range-slider.module';

@Component({
  standalone: true,
  selector: 'merc-range-slider-composition-cmp',
  imports: [MercRangeSliderModule],
  template: `<div style="margin-top: 40px; width: 50%;"> <merc-range-slider ></merc-range-slider> </div>`
})
export class MercRangeSliderCompositionComponent {}
