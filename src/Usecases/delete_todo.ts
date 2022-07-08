import { NextFunction, Request, Response } from "express";
import BaseUsecase from "../Core/base_usecase";
import { TodoRepository } from "../Repository/todo_repository";

export class DeleteTodo extends BaseUsecase {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        super();
        this.todoRepository = todoRepository;
    }

    execute(req: Request, res: Response, next: NextFunction): void {
        try {
            this.todoRepository.deleteTodo(req, res, next);

        } catch (error) {
            // will do proper error handling
            throw new ApiError((error as string).toString());
        }
    }
}
