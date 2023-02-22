import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationsService } from './services/locations.service';
import { LocationListComponent } from './components/location-list/location-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LocationsComponent, LocationListComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [LocationsService],
})
export class LocationsModule {}
