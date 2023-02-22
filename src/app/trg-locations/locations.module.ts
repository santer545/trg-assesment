import { MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationsService } from './services/locations.service';
import { LocationListComponent } from './components/location-list/location-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [LocationsComponent, LocationListComponent],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [LocationsService],
})
export class LocationsModule {}
