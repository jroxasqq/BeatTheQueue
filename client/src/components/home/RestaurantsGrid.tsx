import type { Restaurant } from "../../types";

// Each "name" is unique for React's "key" prop.
const data: Restaurant[] = [
  {
    name: "resto1",
    suburb: "Blacktown",
  },
  { name: "resto2", suburb: "Blacktown" },
  { name: "resto3", suburb: "Blacktown" },
  { name: "resto4", suburb: "Blacktown" },
  { name: "resto5", suburb: "Blacktown" },
  { name: "resto6", suburb: "Blacktown" },
];

const RestaurantsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-6 gap-y-0">
        {data.map((resto) => (
          <div className="h-120 text-black" key={resto.name}>
            <div className="h-[70%] w-full rounded-4xl overflow-hidden">
              <img
                className="w-full"
                src={
                  resto.imageSrc ??
                  "https://www.kikkoman.eu/fileadmin/_processed_/4/2/csm_sushi-kakkoii_eb92ad14ee.webp"
                }
              />
            </div>
            <p className="pt-4 text-2xl truncate">{resto.name}</p>
            <p className="text-lg truncate">{resto.suburb}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantsGrid;
