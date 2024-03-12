import { NextFunction, Request, Response } from "express";
export declare function AuthenticateMiddleware(req: Request, res: Response, next: NextFunction): Promise<void>;
