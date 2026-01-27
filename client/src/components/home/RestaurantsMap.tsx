import { useEffect, useState } from "react";

import { config } from "../../config";

const RestaurantsMap = () => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    (async function fetchMap() {
      const res = await fetch(`${config.baseUrl}:${config.serverPort}/map`);
      const resBlob = await res.blob();
      const objectURL = URL.createObjectURL(resBlob);
      setImageSrc(objectURL);
    })();
  }, []);

  return imageSrc ? <img src={imageSrc} /> : <p className="text-black">Map is loading...</p>;
};

export default RestaurantsMap;
