import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../models/location.model';

@Injectable()
export class LocationsService {
  constructor(private http: HttpClient) {}

  getLocationSet(): Observable<Location[]> {
    return this.http.get<Location[]>('/api/locations');
  }
}
