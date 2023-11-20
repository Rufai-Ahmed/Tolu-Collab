import {MongoClient} from "mongodb"
import mongoose from "mongoose"

const URL: string = "mongodb://127.0.0.1:27017/prototypeDB"

export const client = new MongoClient(URL)

const mainConnection = async()=>{
    await mongoose.connect(URL).then((res)=>{
        console.log();
        console.log("DB connection established");
        
        
    })
};