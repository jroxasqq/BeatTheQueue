import express from "express";
import type { Request, Response, NextFunction } from "express";

import { handlerData } from "./api/data.js";
import { config } from "./config.js";

const app = express();

app.use(express.json()); // middleware to parse request body as JSON to req.body

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(handlerData(req, res)).catch(next);
});

const port = config.port;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
