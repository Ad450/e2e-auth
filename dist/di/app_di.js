"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_service_impl_1 = __importDefault(require("../Database/db_service_impl"));
const todo_respository_impl_1 = __importDefault(require("../Repository/todo_respository_impl"));
const endpoints_service_1 = __importDefault(require("../Services/endpoints_service"));
const create_todo_1 = require("../Usecases/create_todo");
const delete_todo_1 = require("../Usecases/delete_todo");
const update_todo_1 = require("../Usecases/update_todo");
class Injector {
}
exports.default = Injector;
Injector.createTodo = new create_todo_1.CreateTodo(new todo_respository_impl_1.default(new endpoints_service_1.default(new db_service_impl_1.default())));
Injector.updateTodo = new update_todo_1.UpdateTodo(new todo_respository_impl_1.default(new endpoints_service_1.default(new db_service_impl_1.default())));
Injector.deleteTodo = new delete_todo_1.DeleteTodo(new todo_respository_impl_1.default(new endpoints_service_1.default(new db_service_impl_1.default())));
