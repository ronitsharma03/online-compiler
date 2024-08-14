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
            fullCode: newCode,
            urlId: newCode._id
        });

    } catch (error) {
        res.status(500).json({
            message: "Error saving the code"
        });
    }
};


export const getCode = async (req: Request, res: Response) => {
    const { codeId } = req.body;
    try {
        const getCode = await Code.findById(codeId);
        if(!getCode){
            return res.status(500).json({
                message: "Error fetching the code"
            });
        }

        return res.json({
            message: "Code fetched succcessfully",
            fullCode: getCode.fullCode
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch the code "
        })
    }
}
