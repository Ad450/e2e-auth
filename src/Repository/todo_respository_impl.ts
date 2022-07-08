import { Request, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { TodoRepository } from "./todo_repository";

export default class TodoRespositoryImpl extends TodoRepository {
    createTodo(req: Request, res: Response, next: NextFunction): Promise<Todo | null> {
        throw new Error("Method not implemented.");
    }
    updateTodo(req: Request, res: Response, next: NextFunction): Promise<Todo | null> {
        throw new Error("Method not implemented.");
    }
    deleteTodo(req: Request, res: Response, next: NextFunction): Promise<Todo | null> {
        throw new Error("Method not implemented.");
    }

}