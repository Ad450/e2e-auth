"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const endpoints_interface_1 = require("./endpoints_interface");
const app_di_1 = __importDefault(require("../di/app_di"));
const createTodoRoute = "/createTodo";
const deleteTodoRoute = "/deleteTodo";
const updateTodoRoute = "/updateTodo";
exports.routes = [
    {
        route: createTodoRoute,
        method: endpoints_interface_1.methods.POST,
        handler: (req, res, next) => app_di_1.default.createTodo.execute(req, res, next)
    },
    {
        route: deleteTodoRoute,
        method: endpoints_interface_1.methods.POST,
        handler: (req, res, next) => app_di_1.default.deleteTodo.execute(req, res, next),
    },
    {
        route: updateTodoRoute,
        method: endpoints_interface_1.methods.POST,
        handler: (req, res, next) => app_di_1.default.updateTodo.execute(req, res, next)
    }
];
