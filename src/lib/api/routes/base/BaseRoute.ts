import axios, { Axios, AxiosInstance } from "axios";

export interface IBaseRoute {
    api: AxiosInstance;
    routeName: string;
}

export abstract class BaseRoute implements IBaseRoute{
    public readonly api: AxiosInstance;
    public readonly routeName: string;

    constructor(att: IBaseRoute) {
        this.api = att.api;
        this.routeName = att.routeName;
    }

    protected path(subPath: string) {
        return `${this.routeName}/${subPath}`;
    }
}