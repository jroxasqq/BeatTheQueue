import type { NextFunction, Request, Response } from "express";
export declare function respondWithJSON(res: Response, code: number, payload: Object): void;
export declare function respondWithError(res: Response, code: number, message: string): void;
export declare function errorMiddleWare(err: Error, req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=middleware.d.ts.map