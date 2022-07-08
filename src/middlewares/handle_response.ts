import { validateRequest } from "./validate_request"
import { Response, Request, NextFunction } from "express";

// will do the actual creation of a todo model and putting into the database
// to be used in the respository implementation
export const createTodoHandler = (req: Request, res: Response, next: NextFunction) => {
    if (validateRequest(req, res, next)) {
        //... creation of todo comes here
    }
}