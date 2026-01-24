import type { Request, Response } from "express";

import data from "../data.json";
import { respondWithJSON } from "./middleware.js";

export async function handlerGetData(req: Request, res: Response) {
  respondWithJSON(res, 200, data);
}
