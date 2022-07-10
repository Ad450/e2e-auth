import { Request, Response, NextFunction } from "express";
import EndpointsService from "../Services/endpoints_service";

import { TodoRepository } from "./todo_repository";


export default class TodoRespositoryImpl extends TodoRepository {
    endpointsService: EndpointsService;

    constructor(endpointsService: EndpointsService) {
        super();
        this.endpointsService = endpointsService;
    }

    async createTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await this.endpointsService.createTodoService(req, res, next);
        } catch (error) {
            throw new Error((error as string).toString());
        }
    }
    async updateTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await this.endpointsService.createTodoService(req, res, next);
        } catch (error) {
            throw new Error((error as string).toString());
        }
    }
    async deleteTodo(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await this.endpointsService.createTodoService(req, res, next);
        } catch (error) {
            throw new Error((error as string).toString());
        }
    }


}