import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, inject, OnInit } from '@angular/core';
import { LocationsService } from '../services/locations.service';
import { LocationData } from '../models/location.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'trg-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  private translate = inject(TranslateService);

  locations$!: Observable<LocationData[]>;
  constructor(private locationService: LocationsService) {}

  ngOnInit(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    this.locations$ = this.locationService.getLocationSet().pipe(
      map((locations) =>
        locations.map(({ id, name, coordinates }) => {
          return {
            id,
            name,
            lng: coordinates[0],
            ltd: coordinates[1],
          } satisfies LocationData;
        })
      )
    );
  }
}
