
import { IEndpoints, methods } from "./endpoints_interface";
import { CreateTodo, } from "../Usecases/create_todo";
import { UpdateTodo } from "../Usecases/update_todo";
import { DeleteTodo } from "../Usecases/delete_todo";
import TodoRespositoryImpl from "../Repository/todo_respository_impl";



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
        handler: (req, res, next) => createTodo.execute(req, res, next)
    },
    {
        route: deleteTodoRoute,
        method: methods.POST,
        handler: (req, res, next) => deleteTodo.execute(req, res, next),
    },
    {
        route: updateTodoRoute,
        method: methods.POST,
        handler: (req, res, next) => updateTodo.execute(req, res, next)
    }
]