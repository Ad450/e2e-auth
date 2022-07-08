import { Request, Response, NextFunction } from "express"

export abstract class TodoRepository {
    abstract createTodo(req: Request, res: Response, next: NextFunction): Promise<Todo | null>;
    abstract updateTodo(req: Request, res: Response, next: NextFunction): Promise<Todo | null>;
    abstract deleteTodo(req: Request, res: Response, next: NextFunction): Promise<Todo | null>;
}