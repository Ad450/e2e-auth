"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
const object_hash_1 = __importDefault(require("object-hash"));
const generateId = (title, isChecked, isCreateTodo) => {
    if (isCreateTodo) {
        const hashValue = {
            "title": title,
            "isChecked": isChecked,
        };
        const id = (0, object_hash_1.default)(hashValue);
        return id;
    }
};
exports.generateId = generateId;
