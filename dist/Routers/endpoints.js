"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const endpoints_interface_1 = require("./endpoints_interface");
const create_todo_1 = require("../Usecases/create_todo");
const update_todo_1 = require("../Usecases/update_todo");
const delete_todo_1 = require("../Usecases/delete_todo");
const todo_respository_impl_1 = __importDefault(require("../Repository/todo_respository_impl"));
// manually inject dependencies
const createTodo = new create_todo_1.CreateTodo(new todo_respository_impl_1.default());
const updateTodo = new update_todo_1.UpdateTodo(new todo_respository_impl_1.default());
const deleteTodo = new delete_todo_1.DeleteTodo(new todo_respository_impl_1.default());
const createTodoRoute = "/createTodo";
const deleteTodoRoute = "/deleteTodo";
const updateTodoRoute = "/updateTodo";
exports.routes = [
    {
        route: createTodoRoute,
        method: endpoints_interface_1.methods.POST,
        handler: (req, res, next) => createTodo.execute(req, res, next)
    },
    {
        route: deleteTodoRoute,
        method: endpoints_interface_1.methods.POST,
        handler: (req, res, next) => deleteTodo.execute(req, res, next),
    },
    {
        route: updateTodoRoute,
        method: endpoints_interface_1.methods.POST,
        handler: (req, res, next) => updateTodo.execute(req, res, next)
    }
];
