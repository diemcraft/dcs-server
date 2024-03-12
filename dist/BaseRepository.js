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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const mssql_1 = __importDefault(require("mssql"));
const Repository_decorator_1 = require("./decorators/Repository.decorator");
let BaseRepository = class BaseRepository {
    constructor() {
    }
    get sql() { return mssql_1.default; }
    query(query) {
        return new mssql_1.default.Request().query(query);
    }
    newRequest() {
        return new mssql_1.default.Request();
    }
    async find(query, variables = []) {
        try {
            const request = this.newRequest();
            for (const variable of variables)
                request.input(variable.name, variable.type, variable.value);
            const results = await request.query(query);
            return results.recordset;
        }
        catch (ex) {
            return new Error(ex);
        }
    }
    async findOne(id) {
        const repo = this;
        const query = `SELECT * FROM ${repo.table} WHERE ${repo.idField} = @id`;
        try {
            const request = this.newRequest();
            request.input("id", mssql_1.default.BigInt, id);
            const results = await request.query(query);
            if (results.recordset.length === 0)
                return null;
            return results.recordset[0];
        }
        catch (ex) {
            return new Error(ex);
        }
    }
};
exports.BaseRepository = BaseRepository;
exports.BaseRepository = BaseRepository = __decorate([
    (0, Repository_decorator_1.Repository)(),
    __metadata("design:paramtypes", [])
], BaseRepository);
