
import { IEndpoints, methods } from "./endpoints_interface";
import Injector from "../di/app_di";


const createTodoRoute: string = "/createTodo";
const deleteTodoRoute: string = "/deleteTodo";
const updateTodoRoute: string = "/updateTodo";

export const routes: Array<IEndpoints> = [
    {
        route: createTodoRoute,
        method: methods.POST,
        handler: (req, res, next) => Injector.createTodo.execute(req, res, next)
    },
    {
        route: deleteTodoRoute,
        method: methods.POST,
        handler: (req, res, next) => Injector.deleteTodo.execute(req, res, next),
    },
    {
        route: updateTodoRoute,
        method: methods.POST,
        handler: (req, res, next) => Injector.updateTodo.execute(req, res, next)
    }
]