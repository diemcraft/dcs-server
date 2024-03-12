import { Request, Response } from "express";
export declare class HelloController {
    get(req: Request, res: Response<string | Error>): Promise<Response>;
    test(req: Request, res: Response<string | Error>): Promise<Response>;
    post(req: Request, res: Response<string | Error>): Promise<Response>;
}
