import express, { NextFunction, Request, Response } from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { routes } from "./Routers/endpoints";
import { createTodoHandler } from "./middlewares/handle_response";
import TodoRespositoryImpl from "./Repository/todo_respository_impl";
import { CreateTodo } from "./Usecases/create_todo";


dotenv.config();
const app = express();

app.use(bodyParser.json());

// all routes and their corresponding implementations 
const createTodoIndex: number = 0;
const deleteTodoIndex: number = 1;
const updateTodoIndex: number = 2;


app.post(routes[createTodoIndex].route, routes[createTodoIndex].handler);
app.post(routes[deleteTodoIndex].route, routes[deleteTodoIndex].handler);
app.post(routes[updateTodoIndex].route, routes[updateTodoIndex].handler);



app.listen(process.env.APP_PORT || 8080, () => {
    console.log("so many things happening right now");
    console.log(process.env.APP_PORT);
});
