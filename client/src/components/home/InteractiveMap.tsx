import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { config } from "../../config";
import InteractiveMapMarker from "./InteractiveMapMarker";

const center = { lat: -33.8300330824995, lng: 151.1260496110137 };
const markers = [
  {
    position: { lat: -33.68964827834138, lng: 150.92689952493558 },
    description: "Shiba's Kitchen - Rouse Hill",
  },
  {
    position: { lat: -33.874117965969674, lng: 151.20629404198823 },
    description: "Hakata Gensuke",
  },
  {
    position: { lat: -33.79706021830938, lng: 151.1798324307319 },
    description: "Hakatamon",
  },
];

const InteractiveMap = () => {
  return (
    <APIProvider apiKey={config.googleMapsApiKey}>
      <div className="h-[70vh]">
        <Map defaultZoom={11} defaultCenter={center} mapId={config.googleMapsMapId}>
          {markers.map((marker, idx) => (
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
