import { Request, Response, NextFunction } from "express";

import { TodoRepository } from "./todo_repository";
import { createTodoHandler } from "../middlewares/handle_response";

export default class TodoRespositoryImpl extends TodoRepository {
    createTodo(req: Request, res: Response, next: NextFunction): void {
        try {
            createTodoHandler(req, res, next);
        } catch (error) {
            throw new Error((error as string).toString());
        }
    }
    updateTodo(req: Request, res: Response, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }
    deleteTodo(req: Request, res: Response, next: NextFunction): void {
        throw new Error("Method not implemented.");
    }


}