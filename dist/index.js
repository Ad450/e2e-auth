"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const endpoints_1 = require("./Routers/endpoints");
const db_setup_1 = __importDefault(require("./Database/db_setup"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// all routes and their corresponding implementations 
const createTodoIndex = 0;
const deleteTodoIndex = 1;
const updateTodoIndex = 2;
app.post(endpoints_1.routes[createTodoIndex].route, endpoints_1.routes[createTodoIndex].handler);
app.post(endpoints_1.routes[deleteTodoIndex].route, endpoints_1.routes[deleteTodoIndex].handler);
app.post(endpoints_1.routes[updateTodoIndex].route, endpoints_1.routes[updateTodoIndex].handler);
const startApp = () => {
    try {
        app.listen(process.env.APP_PORT || 8080, () => {
            console.info("server started, fire on 💥 🔥");
        });
        (0, db_setup_1.default)();
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
startApp();
