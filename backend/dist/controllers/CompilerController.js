"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = exports.saveCode = void 0;
const CodeSchema_1 = require("../models/CodeSchema");
const saveCode = async (req, res) => {
    const { fullCode } = req.body;
    try {
        const newCode = await CodeSchema_1.Code.create({
            fullCode: fullCode
        });
        return res.status(201).json({
            message: "Code Saved successfully",
            fullCode: newCode,
            urlId: newCode._id
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error saving the code"
        });
    }
};
exports.saveCode = saveCode;
const getCode = async (req, res) => {
    const { codeId } = req.body;
    try {
        const getCode = await CodeSchema_1.Code.findById(codeId);
        if (!getCode) {
            return res.status(500).json({
                message: "Error fetching the code"
            });
        }
        return res.json({
            message: "Code fetched succcessfully",
            fullCode: getCode.fullCode
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch the code "
        });
    }
};
exports.getCode = getCode;
