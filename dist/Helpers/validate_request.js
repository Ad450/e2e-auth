"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const console_1 = require("console");
const validateRequest = (req, res, next) => {
    if (req.body.title === null && req.body.isChecked === null && req.body.id == null) {
        return false;
    }
    (0, console_1.assert)(req.body.title !== null);
    (0, console_1.assert)(req.body.isChecked !== null);
    (0, console_1.assert)(req.body.id !== null);
    return true;
};
exports.validateRequest = validateRequest;
