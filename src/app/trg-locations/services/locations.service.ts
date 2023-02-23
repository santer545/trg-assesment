import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';

@Injectable()
export class LocationsService {
  private http = inject(HttpClient);

  getLocationSet(): Observable<Location[]> {
    return this.http.get<Location[]>('/api/locations');
  }
}
