"use client";

import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { config } from "../../config";

const center = { lat: -33.8300330824995, lng: 151.1260496110137 };

const InteractiveMap = () => {
  return (
    <APIProvider apiKey={config.googleMapsApiKey}>
      <div className="h-[70vh]">
        <Map defaultZoom={11} defaultCenter={center}></Map>
      </div>
    </APIProvider>
  );
};

export default InteractiveMap;
