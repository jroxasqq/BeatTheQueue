import type { Request, Response } from "express";

import { respondWithJSON } from "./middleware.js";
import { config } from "../config.js";

export async function handlerGetData(req: Request, res: Response) {
  respondWithJSON(res, 200, {});
}

export async function handlerGetMapData(req: Request, res: Response) {
  const base_url = "https://maps.googleapis.com/maps/api/staticmap";
  const params = new URLSearchParams({
    center: "Brooklyn Bridge,New York,NY",
    zoom: "13",
    size: "600x300",
    maptype: "roadmap",
    key: config.googlePlacesAPIKey,
  });
  const markers = [
    "color:blue|label:S|40.702147,-74.015794",
    "color:green|label:G|40.711614,-74.012318",
    "color:red|label:C|40.718217,-73.998284",
  ];
  markers.forEach((marker) => params.append("markers", marker));
  const response = await fetch(`${base_url}?${params}`);

  res.set("Content-Type", "image/png");

  const buffer = await response.arrayBuffer();
  res.status(200).send(Buffer.from(buffer));
}
