import { useEffect, useState } from "react";

import RestaurantsGrid from "../components/home/RestaurantsGrid";
import RestaurantsMap from "../components/home/RestaurantsMap";
import { config } from "../config";

const HomePage = () => {
  const [isMap, setIsMap] = useState(false);

  useEffect(() => {
    if (isMap) {
      (async function fetchMap() {
        const res = await fetch(`${config.baseUrl}:${config.serverPort}`);
        console.log(res);
      })();
    }
  }, [isMap]);

  return (
    <div className="w-screen p-8">
      <div className="items-center justify-between flex flex-row">
        <div>
          <p className="mb-6 text-6xl text-black font-medium">BeatTheQueue</p>
          <p className="mb-12 text-2xl text-gray-800">My own restaurant viewer!</p>
        </div>
        <button className="h-12" onClick={() => setIsMap(!isMap)}>
          View as {`${isMap ? "grid" : "map"}`}
        </button>
      </div>
      {isMap ? <RestaurantsMap /> : <RestaurantsGrid />}
    </div>
  );
};

export default HomePage;
