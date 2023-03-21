import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MercButtonPrimaryComponent } from './merc-button-primary.component';

@NgModule({
  declarations: [
    MercButtonPrimaryComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MercButtonPrimaryComponent
  ]
})
export class MercButtonPrimaryModule { }
