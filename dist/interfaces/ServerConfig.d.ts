import { DatabaseConfig } from "./DatabaseConfig";
export interface ServerConfig {
    name?: string;
    logging?: boolean;
    database?: DatabaseConfig;
    port?: string | number;
    baseUrl?: string;
    onSigintEvent?: () => void;
}
