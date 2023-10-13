import express from "express";
import cors from "cors"
import { ConnectDB } from "./utils/connectDB";
import menuRouter from "./routes/menu-Routes";

const app = express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json({message:"working"})
})

app.use("/menu",menuRouter)

ConnectDB()

app.listen(8080,()=>{
    console.log("server running on http://localhost:8080/");
    
})
