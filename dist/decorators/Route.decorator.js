"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
require("reflect-metadata");
function GET(route) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('route', route, target, propertyKey);
        Reflect.defineMetadata('verb', "GET", target, propertyKey);
    };
}
exports.GET = GET;
function POST(route) {
    return function (target, propertyKey) {
        Reflect.defineMetadata('route', route, target, propertyKey);
        Reflect.defineMetadata('verb', "POST", target, propertyKey);
    };
}
exports.POST = POST;
