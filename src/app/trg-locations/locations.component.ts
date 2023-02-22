import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { LocationsService } from './services/locations.service';
import { Location, LocationData } from './models/location.model';

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
        locations.map((location, index) => {
          return {
            id: Date.now(),
            xCoord: location.coordinates[0],
            yCoord: location.coordinates[1],
            name: location.name,
          } satisfies LocationData;
        })
      )
    );
  }
}
