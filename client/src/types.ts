export type RestaurantData = {
  name: string;
  suburb: string;
  description: string;
  imageSrc: string;
  latitude: number;
  longitude: number;
};

export type InteractiveMapMarkerProps = {
  position: {
    lat: number;
    lng: number;
  };
  description: string;
};
