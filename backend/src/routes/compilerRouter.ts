import express from "express";
import { saveCode } from "../controllers/CompilerController";

export const compilerRouter = express.Router();

compilerRouter.post("/save", saveCode);
