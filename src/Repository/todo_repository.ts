import { Request, Response, NextFunction } from "express"

export abstract class TodoRepository {
    abstract createTodo(req: Request, res: Response, next: NextFunction): void;
    abstract updateTodo(req: Request, res: Response, next: NextFunction): void;
    abstract deleteTodo(req: Request, res: Response, next: NextFunction): void;
}