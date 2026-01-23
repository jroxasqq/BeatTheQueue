import express from "express";
import { config } from "../config.js";
export function handlerData(req, res) {
    const keyExists = config.googlePlacesAPIKey ? "yes" : "no";
    res.status(200).send(keyExists);
}
//# sourceMappingURL=data.js.map