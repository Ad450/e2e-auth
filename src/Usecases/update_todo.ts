import { NextFunction, Request, Response } from "express";
import BaseUsecase from "../Core/base_usecase";
import { TodoRepository } from "../Repository/todo_repository";

export class UpdateTodo extends BaseUsecase {
    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        super();
        this.todoRepository = todoRepository;
    }

    execute(req: Request, res: Response, next: NextFunction): void {
        try {
            this.todoRepository.updateTodo(req, res, next);

        } catch (error) {
            throw new ApiError("Method not implemented.");

        }
    }
}