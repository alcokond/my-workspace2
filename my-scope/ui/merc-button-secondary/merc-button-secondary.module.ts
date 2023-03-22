import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MercButtonSecondaryComponent } from './merc-button-secondary.component';

@NgModule({
  declarations: [
    MercButtonSecondaryComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MercButtonSecondaryComponent
  ]
})
export class MercButtonSecondaryModule { }
