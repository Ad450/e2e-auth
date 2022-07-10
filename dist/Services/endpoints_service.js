"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_id_1 = require("../Helpers/generate_id");
const validate_request_1 = require("../Helpers/validate_request");
const service_1 = __importDefault(require("./service"));
class EndpointsService extends service_1.default {
    async createTodoService(req, res, next) {
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
        const todo = {
            title: req.body.title,
            subTitle: req.body.subTitle,
            id: (hash === null) ? "" : hash,
            isChecked: false,
        };
        res.status(200).set("content-type", "application/json").json(todo);
    }
    deleteTodoService(req, res, next) {
        throw new Error("Method not implemented.");
    }
    UpdateTodoService(req, res, next) {
        throw new Error("Method not implemented.");
    }
}
exports.default = EndpointsService;
