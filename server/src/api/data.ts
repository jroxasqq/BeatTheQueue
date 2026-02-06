import type { Request, Response } from "express";

import { respondWithJSON } from "./middleware.js";
import database from "../temp_database.js";

export async function handlerGetData(req: Request, res: Response) {
  respondWithJSON(res, 200, {});
}

export async function handlerGetMapData(req: Request, res: Response) {
  res.set("Content-Type", "application/json");
  res.status(200).send(database);
}
