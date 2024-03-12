import sql from 'mssql';
import { DatabaseConfig } from '../interfaces/DatabaseConfig';
export declare class Database {
    static connectionPool: sql.ConnectionPool;
    static init(config: DatabaseConfig): Promise<void>;
    static close(): void;
}
