import { assert } from "console";
import { Request, Response, NextFunction } from "express";

export const validateRequest = (req: Request, res: Response, next: NextFunction): boolean => {

    if (req.body.title === null && req.body.isChecked === null && req.body.id == null) {
        return false
    }
    assert(req.body.title !== null);
    assert(req.body.isChecked !== null);
    assert(req.body.id !== null);
    return true;
}


