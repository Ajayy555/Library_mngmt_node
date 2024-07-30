import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const dbConnection = async ()=>{

    try {

       const db= await mongoose.connect(`${process.env.URI}/${DB_NAME}`)
       console.log("MongoDB Connected !!");
        
    } catch (error) {
        console.log('Mongo DB error While Connection');
    }

}