import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { Component, inject, OnInit } from '@angular/core';
import { LocationData } from '@app/models/location.model';
import { StorageService } from '@app/services/storage.service';
import { SidenavService } from '@app/services/sidenav.service';

@Component({
  selector: 'trg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  private storageService = inject(StorageService);
  private sidenavService = inject(SidenavService);
  locationItem$!: Observable<Omit<LocationData, 'id'> | null>;

  ngOnInit() {
    this.locationItem$ = this.storageService.location$.pipe(
      filter(Boolean),
      map(({ coordinates, name }) => {
        if (coordinates && name) {
          this.sidenavService.open();
          const [lng, ltd] = coordinates;
          return {
            name,
            lng,
            ltd,
          };
        }
        return null;
      })
    );
  }
}
