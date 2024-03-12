import sql, { IResult, ISqlType } from 'mssql';
interface Variable {
    name: string;
    type: ISqlType | (() => ISqlType);
    value: any;
}
export declare class BaseRepository<T> {
    constructor();
    protected get sql(): typeof sql;
    protected query(query: string): Promise<IResult<any>>;
    protected newRequest(): sql.Request;
    find(query: string, variables?: Array<Variable>): Promise<Array<T> | Error>;
    findOne(id: any): Promise<T | null | Error>;
}
export {};
