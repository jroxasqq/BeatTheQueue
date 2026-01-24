import data from "../data.json" with { type: "json" };
import { respondWithJSON } from "./middleware.js";
export async function handlerGetData(req, res) {
    respondWithJSON(res, 200, data);
}
//# sourceMappingURL=data.js.map