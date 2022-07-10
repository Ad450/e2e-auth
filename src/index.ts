import express from "express"
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { routes } from "./Routers/endpoints";
import mongooseSetup from "./Database/db_setup";


dotenv.config();
const app = express();

app.use(bodyParser.json());

// all routes and their corresponding implementations 
const createTodoIndex: number = 0;
const deleteTodoIndex: number = 1;
const updateTodoIndex: number = 2;


app.post(routes[createTodoIndex].route, routes[createTodoIndex].handler);
app.post(routes[deleteTodoIndex].route, routes[deleteTodoIndex].handler);
app.patch(routes[updateTodoIndex].route, routes[updateTodoIndex].handler);


const startApp = () => {
    try {
        app.listen(process.env.APP_PORT || 8080, () => {
            console.info("server started, fire on 💥 🔥");
        });
        mongooseSetup();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

startApp();