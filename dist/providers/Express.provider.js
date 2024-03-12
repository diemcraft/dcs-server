"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Express = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
class Express {
    express;
    server = null;
    constructor() {
        this.express = (0, express_1.default)();
        this.express.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
        this.express.use(express_1.default.json({ limit: '50mb' }));
        this.configureCors();
    }
    configureCors() {
        this.express.use((0, cors_1.default)());
    }
    async start(port) {
        return new Promise(() => {
            this.server = this.express
                .listen(port, () => { return true; })
                .on('error', () => { return false; });
        });
    }
    close() {
        this.server?.close();
    }
    addRouter(path, router) {
        this.express.use(path, router);
    }
    addMiddleware(handler) {
        this.express.use(handler);
    }
}
exports.Express = Express;
