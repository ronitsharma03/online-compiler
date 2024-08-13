import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/db";
import { compilerRouter } from "./routes/compilerRouter";
 
const app = express();

app.use(express.json());
app.use(cors());
config(); 

dbConnect();

app.use("/compiler", compilerRouter);

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Health is good");
});

app.listen(3000, () => {
    // console.log(process.env.JWT)
  console.log("http://localhost:3000");
});
