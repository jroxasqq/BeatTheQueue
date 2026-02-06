import { useState } from "react";
import { AdvancedMarker, InfoWindow } from "@vis.gl/react-google-maps";

import type { InteractiveMapMarkerProps } from "../../types";

const InteractiveMapMarker = ({ position, description }: InteractiveMapMarkerProps) => {
  const [openMarker, setOpenMarker] = useState(false);

  return (
    <>
      <AdvancedMarker position={position} onClick={() => setOpenMarker(true)} />
      {openMarker && (
        <InfoWindow position={position} onCloseClick={() => setOpenMarker(false)}>
          <p className="text-black">{description}</p>
        </InfoWindow>
      )}
    </>
  );
};

export default InteractiveMapMarker;
