"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_service_1 = __importDefault(require("./db_service"));
const db_schema_1 = require("./db_schema");
class DatabaseServiceImpl extends db_service_1.default {
    async create(data) {
        try {
            const { _title, _subTitle, _isChecked, _hash } = data;
            const newTodo = new db_schema_1.Todo({ title: _title, subTitle: _subTitle, isChecked: _isChecked, hash: _hash });
            await newTodo.save();
        }
        catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }
    async update(data) {
        try {
            const { _isChecked, _subTitle, _title, _hash } = data;
            await db_schema_1.Todo.updateOne({ hash: _hash, }, { title: _title, subTitle: _subTitle, isChecked: _isChecked, hash: _hash });
        }
        catch (error) {
            // will do proper error handling
            console.log(error);
        }
    }
    async delete(data) {
        try {
            const { _hash } = data;
            await db_schema_1.Todo.remove({ hash: _hash });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = DatabaseServiceImpl;
