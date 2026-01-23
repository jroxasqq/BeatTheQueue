import express from "express";
import type { Request, Response } from "express";
import { config } from "../config.js";

export function handlerData(req: Request, res: Response) {
  const keyExists = config.googlePlacesAPIKey ? "yes" : "no";
  res.status(200).send(keyExists);
}
