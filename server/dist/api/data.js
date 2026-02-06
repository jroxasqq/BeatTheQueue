import { respondWithJSON } from "./middleware.js";
import database from "../temp_database.js";
export async function handlerGetData(req, res) {
    respondWithJSON(res, 200, {});
}
export async function handlerGetMapData(req, res) {
    res.set("Content-Type", "application/json");
    res.status(200).send(database);
}
//# sourceMappingURL=data.js.map