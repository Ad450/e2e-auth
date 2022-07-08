
import { validateRequest } from "../middlewares/validate_request";
import { IEndpoints, methods } from "./endpoints_interface";
import bodyParse from "body-parser";
import { CreateTodo, } from "../Usecases/create_todo";
import { UpdateTodo } from "../Usecases/update_todo";
import { DeleteTodo } from "../Usecases/delete_todo";
import TodoRespositoryImpl from "../Repository/todo_respository_impl";
import { createTodoHandler } from "../middlewares/handle_response";
import { NextFunction, Request, Response } from "express";


// manually inject dependencies
const createTodo = new CreateTodo(new TodoRespositoryImpl());
const updateTodo = new UpdateTodo(new TodoRespositoryImpl());
const deleteTodo = new DeleteTodo(new TodoRespositoryImpl());

const createTodoRoute: string = "/createTodo";
const deleteTodoRoute: string = "/deleteTodo";
const updateTodoRoute: string = "/updateTodo";

export const routes: Array<IEndpoints> = [
    {
        route: createTodoRoute,
        method: methods.POST,
        handler: createTodo.execute
    },
    {
        route: deleteTodoRoute,
        method: methods.POST,
        handler: deleteTodo.execute
    },
    {
        route: updateTodoRoute,
        method: methods.POST,
        handler: updateTodo.execute
    }
]