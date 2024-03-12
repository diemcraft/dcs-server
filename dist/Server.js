"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
require("reflect-metadata");
const dotenv = __importStar(require("dotenv"));
const Express_provider_1 = require("./providers/Express.provider");
const express_1 = require("express");
const Database_provider_1 = require("./providers/Database.provider");
class Server {
    _config;
    _express = null;
    get name() { return this._config.name; }
    constructor(config = {}) {
        this._config = Object.assign({
            name: "Server",
            logging: true,
            port: process.env.PORT || 7100,
            baseUrl: ""
        }, config);
        console.log(`[${config.name}]`);
    }
    async load() {
        console.log(`[${this.name}] load started`);
        await this.loadConfiguration();
        const loadPromisses = [];
        loadPromisses.push(this.loadExpress());
        loadPromisses.push(this.loadDatabase());
        loadPromisses.push(this.bindSigintEvent());
        await Promise.all(loadPromisses);
        console.log(`[${this.name}] load finished`);
    }
    async loadConfiguration() {
        console.log(`[${this.name}] loadConfiguration`);
        dotenv.config();
    }
    async loadExpress() {
        console.log(`[${this.name}] loadExpress`);
        this._express = new Express_provider_1.Express();
    }
    async loadDatabase() {
        if (!this._config.database
            && process.env.DB_SERVER
            && process.env.DB_DATABASE
            && process.env.DB_USER
            && process.env.DB_PASSWORD) {
            this._config.database = {
                server: process.env.DB_SERVER,
                database: process.env.DB_DATABASE,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
            };
        }
        if (this._config.database) {
            console.log(`[${this.name}] loadDatabase`);
            await Database_provider_1.Database.init(this._config.database);
        }
        else {
            console.log(`[${this.name}] no database config`);
        }
    }
    async bindSigintEvent() {
        console.log(`[${this.name}] bindSigintEvent`);
    }
    async run() {
        if (!this._express)
            return;
        console.log('\x1b[33m%s\x1b[0m', `[${this.name}] starting server @ http://:${this._config.port}`);
        await this._express.start(this._config.port);
    }
    register = {
        controler: (controllerType) => this.registerController(controllerType),
        middleware: (handler) => this.registerMiddleware(handler),
    };
    registerController(controllerType) {
        const instance = new controllerType();
        const router = (0, express_1.Router)();
        if (!instance.baseUrl) {
            throw new Error("not a controller");
        }
        for (const method of Object.getOwnPropertyNames(controllerType.prototype)) {
            if (!Reflect.hasMetadata("route", instance, method))
                continue;
            const route = "/" + Reflect.getMetadata("route", instance, method);
            const verb = Reflect.getMetadata("verb", instance, method);
            if (verb === "GET") {
                router.get(route, instance[method]);
            }
            else if (verb === "POST") {
                router.post(route, instance[method]);
            }
        }
        const baseUrl = `${this._config.baseUrl}/${instance.baseUrl}`;
        if (this._express)
            this._express.addRouter(baseUrl, router);
    }
    registerMiddleware(handler) {
        this._express?.addMiddleware(handler);
    }
}
exports.Server = Server;
