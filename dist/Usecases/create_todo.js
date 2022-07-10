"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodo = void 0;
const base_usecase_1 = __importDefault(require("../Core/base_usecase"));
const error_1 = __importDefault(require("../Error_handlers/error"));
class CreateTodo extends base_usecase_1.default {
    constructor(todoRepository) {
        super();
        this.todoRepository = todoRepository;
    }
    execute(req, res, next) {
        try {
            this.todoRepository.createTodo(req, res, next);
        }
        catch (error) {
            throw new error_1.default("");
        }
    }
}
exports.CreateTodo = CreateTodo;
