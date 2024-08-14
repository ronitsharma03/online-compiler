"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerRouter = void 0;
const express_1 = __importDefault(require("express"));
const CompilerController_1 = require("../controllers/CompilerController");
exports.compilerRouter = express_1.default.Router();
exports.compilerRouter.post("/save", CompilerController_1.saveCode);
exports.compilerRouter.post("/getcode", CompilerController_1.getCode);
