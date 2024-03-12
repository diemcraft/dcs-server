"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
require("reflect-metadata");
function Repository(table = "", idField = "") {
    return function (ctr) {
        ctr.prototype.table = table;
        ctr.prototype.idField = idField;
        Reflect.defineMetadata('table', table, ctr);
        Reflect.defineMetadata('idField', idField, ctr);
    };
}
exports.Repository = Repository;
