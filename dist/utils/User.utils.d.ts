import { Request } from "express";
export declare class UserUtils {
    static getCurrentAccount(req?: Request): string;
    static getCurrentAccountId(req?: Request): number;
    static accountIntToString(account: number): string;
    static accountStringToInt(account: string): number;
}
