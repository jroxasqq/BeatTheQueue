import { useState } from "react";

import RestaurantsGrid from "../components/home/RestaurantsGrid";
import InteractiveMap from "../components/home/InteractiveMap";

const HomePage = () => {
  const [isMap, setIsMap] = useState(false);

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
      {isMap ? <InteractiveMap /> : <RestaurantsGrid />}
    </div>
  );
};

export default HomePage;
