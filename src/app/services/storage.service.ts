import { Injectable } from '@angular/core';
import { LocationItem } from '@app/models/location.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private locationSubject: BehaviorSubject<LocationItem> = new BehaviorSubject(
    {} as LocationItem
  );
  location$: Observable<LocationItem> = this.locationSubject.asObservable();

  setLocation(newValue: LocationItem) {
    this.locationSubject.next(newValue);
  }
}
