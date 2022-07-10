"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_id_1 = require("../Helpers/generate_id");
const validate_request_1 = require("../Helpers/validate_request");
const service_1 = __importDefault(require("./service"));
class EndpointsService extends service_1.default {
    constructor(dbService) {
        super();
        this.dbService = dbService;
    }
    async createTodoService(req, res, next) {
        if (!(0, validate_request_1.validateRequest)(req, res, next)) {
            res.status(401).json({
                "error": "invalid data"
            });
            return;
        }
        //generate hash as id
        const hash = (0, generate_id_1.generateId)(req.body.title, req.body.isChecked, true);
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
        this.dbService.create({ _title: req.body.title, _subTitle: req.body.subTitle, _id: (hash === null) ? "" : hash, _isChecked: req.body.isChecked });
        res.status(200).set("content-type", "application/json").json(todo);
    }
    async deleteTodoService(req, res, next) {
        if (!(0, validate_request_1.validateRequest)(req, res, next)) {
            res.status(401).json({
                "error": "invalid data"
            });
            return;
        }
        this.dbService.delete({ _title: req.body.title, _subTitle: req.body.subTitle, _id: req.body.id, _isChecked: req.body.isChecked });
    }
    async UpdateTodoService(req, res, next) {
        if (!(0, validate_request_1.validateRequest)(req, res, next)) {
            res.status(401).json({
                "error": "invalid data"
            });
            return;
        }
        const todo = {
            title: req.body.title,
            subTitle: req.body.subTitle,
            id: req.body.id,
            isChecked: req.body.isChecked,
        };
        this.dbService.update({ _title: req.body.title, _subTitle: req.body.subTitle, _id: req.body.id, _isChecked: req.body.isChecked });
        res.status(200).set("content-type", "application/json").json(todo);
    }
}
exports.default = EndpointsService;
