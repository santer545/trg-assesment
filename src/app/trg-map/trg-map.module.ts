import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrgMapRoutingModule } from './trg-map-routing.module';
import { TrgMapComponent } from './trg-map.component';

@NgModule({
  declarations: [TrgMapComponent],
  imports: [CommonModule, TrgMapRoutingModule],
})
export class TrgMapModule {}
