export interface DatabaseConfig {
    user: string;
    password: string;
    server: string;
    database: string;
    requestTimeout?: number;
    connectionTimeout?: number;
}
