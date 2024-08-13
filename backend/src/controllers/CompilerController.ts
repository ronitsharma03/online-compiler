import { Request, Response } from "express";
import { Code } from "../models/CodeSchema";

export const saveCode = async (req: Request, res: Response) => {
    const { fullCode } = req.body;
    try {
        const newCode = await Code.create({
            fullCode: fullCode
        });

        return res.status(201).json({
            message: "Code Saved successfully",
            fullCode: newCode
        });

    } catch (error) {
        res.status(500).json({
            message: "Error saving the code"
        });
    }
};
