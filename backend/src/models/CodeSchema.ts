import mongoose from "mongoose";


interface CodeSchemaType{
    fullCode: {
        html: string;
        css: string;
        javascript: string;
    }
};

const codeSchema = new mongoose.Schema<CodeSchemaType>({
    fullCode: {
        html: String,
        css: String,
        javascript: String,
    }
});

export const Code = mongoose.model("Code", codeSchema);