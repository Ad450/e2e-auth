import { Request, Response, NextFunction } from "express";

export interface IBaseUsecaseParams {
    res: Response,
    req: Request,
    next: NextFunction
}


