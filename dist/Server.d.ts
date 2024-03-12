import 'reflect-metadata';
import { ServerConfig } from "./interfaces/ServerConfig";
export declare class Server {
    private _config;
    private _express;
    get name(): string | undefined;
    constructor(config?: ServerConfig);
    load(): Promise<void>;
    private loadConfiguration;
    private loadExpress;
    private loadDatabase;
    private bindSigintEvent;
    run(): Promise<void>;
    register: {
        controler: (controllerType: any) => void;
        middleware: (handler: any) => void;
    };
    private registerController;
    private registerMiddleware;
}
