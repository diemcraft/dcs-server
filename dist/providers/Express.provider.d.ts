import express, { Router } from 'express';
export declare class Express {
    express: express.Application;
    private server;
    constructor();
    configureCors(): void;
    start(port: string | number): Promise<boolean>;
    close(): void;
    addRouter(path: string, router: Router): void;
    addMiddleware(handler: any): void;
}
