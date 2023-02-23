export interface IGeoJson {
  type: string;
  features: Feature[];
}

export interface Feature {
  type: string;
  geometry: Geometry;
  properties: Properties;
}

export interface Geometry {
  type: string;
  coordinates: [lng: number, ltd: number];
}

export interface Properties {
  title: string;
  description: string;
}
