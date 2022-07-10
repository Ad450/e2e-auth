import DatabaseServiceImpl from "../Database/db_service_impl";
import TodoRespositoryImpl from "../Repository/todo_respository_impl";
import EndpointsService from "../Services/endpoints_service";
import { CreateTodo } from "../Usecases/create_todo";
import { DeleteTodo } from "../Usecases/delete_todo";
import { UpdateTodo } from "../Usecases/update_todo";

export default class Injector {

    static createTodo = new CreateTodo(new TodoRespositoryImpl(new EndpointsService(new DatabaseServiceImpl())));
    static updateTodo = new UpdateTodo(new TodoRespositoryImpl(new EndpointsService(new DatabaseServiceImpl())));
    static deleteTodo = new DeleteTodo(new TodoRespositoryImpl(new EndpointsService(new DatabaseServiceImpl())));
}