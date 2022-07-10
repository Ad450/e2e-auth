import { Request, Response, NextFunction } from "express";
export enum methods {
    POST,
    GET
}

export interface IEndpoints {
    route: string;
    handler: (req: Request, res: Response, next: NextFunction) => void;
    method: methods;
}