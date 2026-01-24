import type { Request, Response } from "express";
export declare function respondWithJSON(res: Response, code: number, payload: any): void;
export declare function respondWithError(res: Response, code: number, message: string): void;
export declare function errorMiddleWare(err: Error, req: Request, res: Response): void;
//# sourceMappingURL=middleware.d.ts.map