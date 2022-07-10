"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_repository_1 = require("./todo_repository");
const handle_response_1 = require("../middlewares/handle_response");
class TodoRespositoryImpl extends todo_repository_1.TodoRepository {
    createTodo(req, res, next) {
        try {
            (0, handle_response_1.createTodoHandler)(req, res, next);
        }
        catch (error) {
            throw new Error(error.toString());
        }
    }
    updateTodo(req, res, next) {
        throw new Error("Method not implemented.");
    }
    deleteTodo(req, res, next) {
        throw new Error("Method not implemented.");
    }
}
exports.default = TodoRespositoryImpl;
