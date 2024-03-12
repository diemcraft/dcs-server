"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    constructor(id = 0, name = "") {
        this.id = id;
        this.name = name;
    }
}
exports.User = User;
