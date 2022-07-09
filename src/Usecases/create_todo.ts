import { NextFunction, Request, Response } from "express";
import BaseUsecase from "../Core/base_usecase";
import ApiError from "../Error_handler/error";
import { TodoRepository } from "../Repository/todo_repository";

export class CreateTodo extends BaseUsecase {

    private todoRepository: TodoRepository;

    constructor(todoRepository: TodoRepository) {
        super();
        this.todoRepository = todoRepository;
    }

    execute(req: Request, res: Response, next: NextFunction): void {
        try {
            this.todoRepository.createTodo(req, res, next);
        } catch (error) {
            throw new ApiError("")
        }
    }

}