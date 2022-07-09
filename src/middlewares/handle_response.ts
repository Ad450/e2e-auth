import { validateRequest } from "./validate_request"
import { Response, Request, NextFunction } from "express";
import ITodoParams from "../Interfaces/todo_interface";
import { generateId } from "./generate_id";

// will do the actual creation of a todo model and putting into the database
// to be used in the respository implementation
export const createTodoHandler = (req: Request, res: Response, next: NextFunction) => {
    if (!validateRequest(req, res, next)) {
        res.status(401).json({
            // will handler erros properly 
            "error": "unauthorized"
        })
        return;
    }

    //generate hash as id
    const hash: string | undefined = generateId(req.body.title, req.body.isChecked, true);
    //get req.body and put into database

    // if (hash === null || hash === undefined) {
    //     res.status(500).json({
    //         "error": "unexpected error"
    //     });
    //     return;
    // }

    // debugging
    console.log(req.body);


    const todo = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        id: (hash === null) ? "" : hash,
        isChecked: false,
    }
    res.status(200).set("content-type", "application/json").json(todo);
}

export const updateTodoHandler = (req: Request, res: Response, next: NextFunction) => {
    if (!validateRequest(req, res, next)) {

    }
    //get req.body.id 
    // get todo of id : id in database and update 
    // put into database again
}