import express ,{ Application, Request, Response } from "express";
import cors from "cors"

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.get("/", (req:Request,res:Response)=> {
    res.send("welcome to vat application")
})

export default app;