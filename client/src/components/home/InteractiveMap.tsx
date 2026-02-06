import { useEffect, useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import InteractiveMapMarker from "./InteractiveMapMarker";
import { config } from "../../config";
import type { InteractiveMapMarkerProps, RestaurantData } from "../../types";

const InteractiveMap = () => {
  const [markers, setMarkers] = useState<InteractiveMapMarkerProps[] | null>(null);
  const center = { lat: -33.8300330824995, lng: 151.1260496110137 };

  useEffect(() => {
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
        </Map>
      </div>
    </APIProvider>
  );
};

export default InteractiveMap;
