import express from "express";
import type { Request, Response, NextFunction } from "express";

import { handlerGetData, handlerGetMapData } from "./api/data.js";
import { config } from "./config.js";
import { errorMiddleWare } from "./api/middleware.js";

const app = express();

app.use(express.json()); // middleware to parse request body as JSON to req.body

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(handlerGetData(req, res)).catch(next);
});

app.get("/map", (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(handlerGetMapData(req, res)).catch(next);
});

app.use(errorMiddleWare);

const port = config.port;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
