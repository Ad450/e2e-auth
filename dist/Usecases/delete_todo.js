"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTodo = void 0;
const base_usecase_1 = __importDefault(require("../Core/base_usecase"));
const error_1 = __importDefault(require("../Error_handler/error"));
class DeleteTodo extends base_usecase_1.default {
    constructor(todoRepository) {
        super();
        this.todoRepository = todoRepository;
    }
    execute(req, res, next) {
        try {
            this.todoRepository.deleteTodo(req, res, next);
        }
        catch (error) {
            // will do proper error handling
            throw new error_1.default(error.toString());
        }
    }
}
exports.DeleteTodo = DeleteTodo;
