import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationItem } from '../models/location.model';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private http = inject(HttpClient);

  getLocationSet(): Observable<LocationItem[]> {
    return this.http.get<LocationItem[]>('/api/locations');
  }
}
