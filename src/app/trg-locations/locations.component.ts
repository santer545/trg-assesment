import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from './services/locations.service';
import { Location, LocationData } from './models/location.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'trg-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations$!: Observable<LocationData[]>;
  constructor(private locationService: LocationsService) {}

  ngOnInit(): void {
    this.locations$ = this.locationService.getLocationSet().pipe(
      map((locations) =>
        locations.map(({ id, name, coordinates }) => {
          return {
            id,
            name,
            xCoord: coordinates[0],
            yCoord: coordinates[1],
          } satisfies LocationData;
        })
      )
    );
  }
}
