import { Request, Response, NextFunction } from "express"

export abstract class TodoRepository {
    abstract createTodo(req: Request, res: Response, next: NextFunction): Promise<void>;
    abstract updateTodo(req: Request, res: Response, next: NextFunction): Promise<void>;
    abstract deleteTodo(req: Request, res: Response, next: NextFunction): Promise<void>;
}