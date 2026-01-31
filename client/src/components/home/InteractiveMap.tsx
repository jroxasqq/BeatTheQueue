import { useState } from "react";
import { AdvancedMarker, APIProvider, InfoWindow, Map } from "@vis.gl/react-google-maps";

import { config } from "../../config";

const center = { lat: -33.8300330824995, lng: 151.1260496110137 };

const InteractiveMap = () => {
  const [openMarker, setOpenMarker] = useState(false);

  return (
    <APIProvider apiKey={config.googleMapsApiKey}>
      <div className="h-[70vh]">
        <Map defaultZoom={11} defaultCenter={center} mapId={config.googleMapsMapId}>
          <AdvancedMarker position={center} onClick={() => setOpenMarker(true)} />
          {openMarker && (
            <InfoWindow position={center} onCloseClick={() => setOpenMarker(false)}>
              <p className="text-black">This marker has been opened!</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default InteractiveMap;
