import type { NextFunction, Request, Response } from "express";

export function respondWithJSON(res: Response, code: number, payload: Object) {
  res.header("Content-Type", "application/json");
  const body = JSON.stringify(payload);
  res.status(code).send(body);
}

export function respondWithError(res: Response, code: number, message: string) {
  respondWithJSON(res, code, { error: message });
}

export function errorMiddleWare(err: Error, req: Request, res: Response, next: NextFunction) {
  return respondWithError(res, 500, err.message);
}
