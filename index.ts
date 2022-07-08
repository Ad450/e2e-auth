import express, { Request, Response, NextFunction } from "express"
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import { routes } from "./src/Routers/endpoints";


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
    console.log("app started on port 3000, more fire");
});


// 