import { Request, Response, NextFunction } from "express";
import { generateId } from "../Helpers/generate_id";
import { validateRequest } from "../Helpers/validate_request";
import Service from "./service"

export default class EndpointsService extends Service {
    async createTodoService(req: Request, res: Response, next: NextFunction): Promise<void> {
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

        if (hash === null || hash === undefined) {
            res.status(500).json({
                "error": "unexpected error"
            });
            return;
        }
        const todo = {
            title: req.body.title,
            subTitle: req.body.subTitle,
            id: (hash === null) ? "" : hash,
            isChecked: false,
        }
        res.status(200).set("content-type", "application/json").json(todo);
    }
    deleteTodoService(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
    UpdateTodoService(req: Request, res: Response, next: NextFunction): Promise<void> {
        throw new Error("Method not implemented.");
    }
}