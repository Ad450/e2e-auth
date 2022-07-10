import { NextFunction, Request, Response } from "express";

export default abstract class Service {
    abstract createTodoService(req: Request, res: Response, next: NextFunction): Promise<void>;
    abstract deleteTodoService(req: Request, res: Response, next: NextFunction): Promise<void>;
    abstract updateTodoService(req: Request, res: Response, next: NextFunction): Promise<void>;
}