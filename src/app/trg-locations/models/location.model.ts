type Coordinates = [x: number, y: number];

export interface Location {
  coordinates: Coordinates;
  name: string;
}

export interface LocationData extends Omit<Location, 'coordinates'> {}
