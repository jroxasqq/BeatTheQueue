import { useEffect, useState } from "react";
import { AdvancedMarker, APIProvider, Map, Pin } from "@vis.gl/react-google-maps";

import InteractiveMapMarker from "./InteractiveMapMarker";

import { config } from "../../config";
import type { InteractiveMapMarkerProps, MapCoords, RestaurantData } from "../../types";

const InteractiveMap = () => {
  const [markers, setMarkers] = useState<InteractiveMapMarkerProps[] | null>(null);
  const [currLatLong, setCurrLatLong] = useState<MapCoords | null>(null);
  const center = { lat: -33.8300330824995, lng: 151.1260496110137 };

  useEffect(() => {
    // Fetch restaurants for the map markers.
    (async () => {
      const res = await fetch(`${config.baseUrl}:${config.serverPort}/map`);
      const restaurants: RestaurantData[] = await res.json();
      const newMarkers: InteractiveMapMarkerProps[] = restaurants.map((r) => ({
        position: {
          lat: r.latitude,
          lng: r.longitude,
        },
        description: r.description,
      }));
      setMarkers(() => newMarkers);
    })();

    // Get current user's location for "current location marker".
    const success = (geoPos: GeolocationPosition) => {
      const lat = geoPos.coords.latitude;
      const lng = geoPos.coords.longitude;

      setCurrLatLong({ lat, lng });
    };

    const error = () => console.warn("failed to get user's current location");

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <APIProvider apiKey={config.googleMapsApiKey}>
      <div className="h-[70vh]">
        <Map defaultZoom={11} defaultCenter={center} mapId={config.googleMapsMapId}>
          {markers &&
            markers.map((marker, idx) => (
              <InteractiveMapMarker
                position={marker.position}
                description={marker.description}
                key={idx}
              />
            ))}
          {currLatLong && (
            <AdvancedMarker position={currLatLong}>
              <Pin background="#007bff" glyphColor="#fff" borderColor="#0056b3" />
            </AdvancedMarker>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default InteractiveMap;
