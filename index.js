import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';  
import jwt from "jsonwebtoken";
import verifyJwt from './middleware/auth.js';
import orderRouter from './routes/orderRouter.js';
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express(); 
app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("connected to the database");
    }
).catch(
    ()=>{
        console.log("connection failed");
    }
)



app.use(bodyParser.json());
app.use(verifyJwt);



app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/order",orderRouter);




app.listen(5000,
    ()=>{
        console.log("Server is running on port 5000 ")
    }
)