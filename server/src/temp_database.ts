type RestaurantData = {
  name: string;
  suburb: string;
  description: string;
  imageSrc: string;
  latitude: number;
  longitude: number;
};

const database: RestaurantData[] = [
  {
    name: "Shiba's Kitcken - Pyrmont",
    suburb: "Pyrmont",
    description: "Japanese restaurant in Pyrmont",
    latitude: -33.873246913610814,
    longitude: 151.19590193068,
    imageSrc: "",
  },
  {
    name: "Shiba's Kitcken - Rouse Hill",
    suburb: "Rouse Hill",
    description: "Japanese restaurant in Rouse Hill",
    latitude: -33.68969737668155,
    longitude: 150.9268887963924,
    imageSrc: "",
  },
  {
    name: "Kou Ramen",
    suburb: "Blacktown",
    description: "Nice ramen and katsu shop in Blacktown",
    latitude: -33.77050484789419,
    longitude: 150.90618597116497,
    imageSrc: "",
  },
  {
    name: "Nikko Japanese & Korean",
    suburb: "Kingsford",
    description: "Jjajangmyeon shop near UNSW",
    latitude: -33.922058038057074,
    longitude: 151.22667333865311,
    imageSrc: "",
  },
  {
    name: "Rickshaw Food",
    suburb: "Burwood",
    description: "Lunch special with milktea in Burwood",
    latitude: -33.87810698020353,
    longitude: 151.10221671534,
    imageSrc: "",
  },
  {
    name: "The August Banh Mi Plus",
    suburb: "Burwood",
    description: "Cheap chicken banh mi in Burwood",
    latitude: -33.87442766204383,
    longitude: 151.10507781258838,
    imageSrc: "",
  },
  {
    name: "CEMO",
    suburb: "Chatswood",
    description: "Cheap kimbap in Chatswood",
    latitude: -33.79675441880726,
    longitude: 151.18286509376856,
    imageSrc: "",
  },
  {
    name: "PappaRich Parramatta",
    suburb: "Parramatta",
    description: "Classic Malaysian franchise for nasi lemak",
    latitude: -33.81733254185857,
    longitude: 151.0042283344121,
    imageSrc: "",
  },
];

export default database;
