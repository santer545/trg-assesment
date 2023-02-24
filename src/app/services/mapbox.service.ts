import { inject, Injectable } from '@angular/core';
import {
  LocationData,
  LocationItem,
  Coordinates,
} from '@app/models/location.model';
import { environment } from 'environments/environment.development';
import * as mapboxgl from 'mapbox-gl';
import { SidenavService } from './sidenav.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class MapBoxService {
  private storage = inject(StorageService);
  private sidenavService = inject(SidenavService);

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.22224;
  lng = 35.32438;

  locationInfo!: Omit<LocationData, 'id'>;

  constructor() {
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
  }

  getMarkers(location: LocationItem[]) {
    this.loadMarkers(location);
  }

  getMap(): mapboxgl.Map {
    return (this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 5,
      center: [this.lng, this.lat],
    }));
  }

  getInfoFromMarker(coordinates: Coordinates, name: string): void {
    const [lng, ltd] = coordinates;
    this.locationInfo = {
      lng,
      ltd,
      name,
    };
  }

  loadMarkers(locations: LocationItem[]) {
    locations.forEach(({ coordinates, name }) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3>${name}</h3>`
      );
      const marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(this.map);

      popup.on('close', (e) => {
        this.sidenavService.close();
      });

      popup.on('open', (e) => {
        this.sidenavService.open();
      });

      marker.getElement().addEventListener('click', (event) => {
        const element =
          locations.find(
            (location) =>
              location.coordinates[0] === marker.getLngLat().lng &&
              location.coordinates[1] === marker.getLngLat().lat
          ) || null;
        if (element) {
          this.storage.setLocation(element);
        }
      });
    });
  }
}
