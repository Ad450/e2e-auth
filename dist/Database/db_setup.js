"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// placed here for development purposes
const mongooseUrl = "mongodb+srv://Emmanuel1999:Manu450666@cluster0.ynk8r7l.mongodb.net/test";
const mongooseSetup = () => {
    try {
        mongoose_1.default.connect(process.env.MONGODB || mongooseUrl);
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = mongooseSetup;
