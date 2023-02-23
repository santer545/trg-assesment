export type Coordinates = [lng: number, ltd: number];

export interface LocationItem {
  id: number;
  coordinates: Coordinates;
  name: string;
}

export interface LocationData extends Omit<LocationItem, 'coordinates'> {
  id: number;
  lng: number;
  ltd: number;
}
