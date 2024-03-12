"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
require("reflect-metadata");
function Controller(baseUrl = "/") {
    return function (ctr) {
        ctr.prototype.baseUrl = baseUrl;
        Reflect.defineMetadata('baseUrl', baseUrl, ctr);
    };
}
exports.Controller = Controller;
