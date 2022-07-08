import { Response, Request, NextFunction } from "express";
import hash from "object-hash";
export const generateId = (req: Request, res: Response, next: NextFunction, isCreateTodo: boolean) => {
    if (isCreateTodo) {
        const hashValue = {
            "title": req.body.title,
            "isChecked": req.body.isChecked,

        }

        const id: string = hash(hashValue);
        req.body.id = id;
    }

    next();
}