"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTodo = void 0;
const base_usecase_1 = __importDefault(require("../Core/base_usecase"));
const error_1 = __importDefault(require("../Error_handler/error"));
class UpdateTodo extends base_usecase_1.default {
    constructor(todoRepository) {
        super();
        this.todoRepository = todoRepository;
    }
    execute(req, res, next) {
        try {
            this.todoRepository.updateTodo(req, res, next);
        }
        catch (error) {
            throw new error_1.default("Method not implemented.");
        }
    }
}
exports.UpdateTodo = UpdateTodo;
