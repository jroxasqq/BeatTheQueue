import { useEffect, useState } from "react";

import { config } from "../../config";
import type { RestaurantData } from "../../types";

type RestaurantDataGrid = Pick<RestaurantData, "name" | "suburb" | "imageSrc">;

const RestaurantsGrid = () => {
  const [restaurants, setRestaurants] = useState<RestaurantDataGrid[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${config.baseUrl}:${config.serverPort}/map`);
      const data: RestaurantData[] = await res.json();
      const newRestaurants: RestaurantDataGrid[] = data.map((r) => ({
        name: r.name,
        suburb: r.suburb,
        imageSrc: r.imageSrc,
      }));
      setRestaurants(() => newRestaurants);
    })();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-0">
      {restaurants &&
        restaurants.map((resto, idx) => (
          <div className="h-120 text-black" key={idx}>
            <div className="h-[70%] w-full rounded-4xl overflow-hidden">
              <img
                className="w-full"
                src={
                  resto.imageSrc.length
                    ? resto.imageSrc
                    : "https://www.kikkoman.eu/fileadmin/_processed_/4/2/csm_sushi-kakkoii_eb92ad14ee.webp"
                }
              />
            </div>
            <p className="pt-4 text-2xl truncate">{resto.name}</p>
            <p className="text-lg truncate">{resto.suburb}</p>
          </div>
        ))}
    </div>
  );
};

export default RestaurantsGrid;
