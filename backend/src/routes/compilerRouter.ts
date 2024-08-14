import express from "express";
import { getCode, saveCode } from "../controllers/CompilerController";

export const compilerRouter = express.Router();

compilerRouter.post("/save", saveCode);
compilerRouter.post("/getcode", getCode);
