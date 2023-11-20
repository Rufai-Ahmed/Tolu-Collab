import express, {Application} from "express";
import cors from "cors";

const port: number = 2024;

const app: Application = express();
app.use(express.json());
app.use(cors());

const server =  app.listen(port, ()=>{
    console.log("Server is listening on " + port);
    
})

process.on("uncaughtException", (err, Error)=>{
    console.log("uncaughtException",  Error);
    
    process.exit(1)
})

process.on("rejectionHandled", (reason)=>{
    console.log("rejectionHandled", reason);
    
    process.exit(1);
})