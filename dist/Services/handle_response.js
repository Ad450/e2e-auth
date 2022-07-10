"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoHandler = exports.createTodoHandler = void 0;
const validate_request_1 = require("../Helpers/validate_request");
const generate_id_1 = require("../Helpers/generate_id");
// will do the actual creation of a todo model and putting into the database
// to be used in the respository implementation
const createTodoHandler = async (req, res, next) => {
    if (!(0, validate_request_1.validateRequest)(req, res, next)) {
        res.status(401).json({
            // will handler erros properly 
            "error": "unauthorized"
        });
        return;
    }
    //generate hash as id
    const hash = (0, generate_id_1.generateId)(req.body.title, req.body.isChecked, true);
    //get req.body and put into database
    if (hash === null || hash === undefined) {
        res.status(500).json({
            "error": "unexpected error"
        });
        return;
    }
    // debugging
    console.log(req.body);
    const todo = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        id: (hash === null) ? "" : hash,
        isChecked: false,
    };
    res.status(200).set("content-type", "application/json").json(todo);
};
exports.createTodoHandler = createTodoHandler;
const updateTodoHandler = (req, res, next) => {
    if (!(0, validate_request_1.validateRequest)(req, res, next)) {
    }
    //get req.body.id 
    // get todo of id : id in database and update 
    // put into database again
};
exports.updateTodoHandler = updateTodoHandler;
