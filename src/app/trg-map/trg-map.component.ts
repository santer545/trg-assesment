import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LocationsService } from '@app/services/locations.service';
import { MapBoxService } from '../services/mapbox.service';

@Component({
  selector: 'trg-trg-map',
  templateUrl: './trg-map.component.html',
  styleUrls: ['./trg-map.component.scss'],
})
export class TrgMapComponent implements OnInit, OnDestroy {
  private mapBoxService = inject(MapBoxService);
  private locationService = inject(LocationsService);

  private destroy$ = new Subject<boolean>();

  ngOnInit() {
    this.mapBoxService.getMap();
    this.locationService
      .getLocationSet()
      .pipe(takeUntil(this.destroy$))
      .subscribe((locations) => {
        this.mapBoxService.getMarkers(locations);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
