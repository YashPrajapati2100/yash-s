import express, { response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { urlencoded } from "express";
import dotenv from "dotevn"
dotenv.config({})
import connectDB from "./utils/db.js";

const app=express();


app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser())

const corsOption = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOption))


connectDB()

const port=process.env.PORT ||3000
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));