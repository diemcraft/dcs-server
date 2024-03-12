"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloController = void 0;
const Route_decorator_1 = require("../decorators/Route.decorator");
const Controller_decorator_1 = require("../decorators/Controller.decorator");
let HelloController = class HelloController {
    async get(req, res) {
        return res.send("Hello, stranger!");
    }
    async test(req, res) {
        return res.send("Hello, test!");
    }
    async post(req, res) {
        return res.send("Hello, <name>!");
    }
};
exports.HelloController = HelloController;
__decorate([
    (0, Route_decorator_1.GET)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "get", null);
__decorate([
    (0, Route_decorator_1.GET)("test"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "test", null);
__decorate([
    (0, Route_decorator_1.POST)("add"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HelloController.prototype, "post", null);
exports.HelloController = HelloController = __decorate([
    (0, Controller_decorator_1.Controller)("hello")
], HelloController);
