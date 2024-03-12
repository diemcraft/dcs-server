"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mssql_1 = __importDefault(require("mssql"));
class Database {
    static connectionPool;
    static async init(config) {
        var mssqlConfig = {
            user: config.user,
            password: config.password,
            server: config.server,
            database: config.database,
            requestTimeout: config.requestTimeout || 180000,
            connectionTimeout: config.connectionTimeout || 180000,
            pool: {
                max: 200,
                min: 0,
                idleTimeoutMillis: 180000
            },
            options: {
                encrypt: true,
                enableArithAbort: true,
                trustServerCertificate: true,
                cryptoCredentialsDetails: {
                    ciphers: 'DEFAULT@SECLEVEL=0',
                }
            },
        };
        this.connectionPool = await mssql_1.default.connect(mssqlConfig);
    }
    static close() {
        this.connectionPool?.close();
    }
}
exports.Database = Database;
