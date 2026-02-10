export type RestaurantData = {
  name: string;
  suburb: string;
  description: string;
  imageSrc: string;
  latitude: number;
  longitude: number;
};

export type MapCoords = {
  lat: number;
  lng: number;
};

export type InteractiveMapMarkerProps = {
  position: MapCoords;
  description: string;
};
