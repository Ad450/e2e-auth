import { Response, Request, NextFunction } from "express";
import hash from "object-hash";

export const generateId = (title: string, isChecked: boolean, isCreateTodo: boolean) => {
    if (isCreateTodo) {
        const hashValue = {
            "title": title,
            "isChecked": isChecked,

        }

        const id: string = hash(hashValue);
        return id;
    }
}