"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_repository_1 = require("./todo_repository");
class TodoRespositoryImpl extends todo_repository_1.TodoRepository {
    constructor(endpointsService) {
        super();
        this.endpointsService = endpointsService;
    }
    async createTodo(req, res, next) {
        try {
            await this.endpointsService.createTodoService(req, res, next);
        }
        catch (error) {
            throw new Error(error.toString());
        }
    }
    async updateTodo(req, res, next) {
        try {
            await this.endpointsService.createTodoService(req, res, next);
        }
        catch (error) {
            throw new Error(error.toString());
        }
    }
    async deleteTodo(req, res, next) {
        try {
            await this.endpointsService.createTodoService(req, res, next);
        }
        catch (error) {
            throw new Error(error.toString());
        }
    }
}
exports.default = TodoRespositoryImpl;
