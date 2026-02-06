import { respondWithJSON } from "./middleware.js";
import { config } from "../config.js";
const mapData = [
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
];
export async function handlerGetData(req, res) {
    respondWithJSON(res, 200, {});
}
export async function handlerGetMapData(req, res) {
    res.set("Content-Type", "application/json");
    res.status(200).send(mapData);
}
//# sourceMappingURL=data.js.map